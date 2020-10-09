import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';
import RootStackScreen from './screens/RootStackScreen';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();


export default function App() {
  // reducer function
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  const loginReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
       return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
       };
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  // sign in, sign out, sign up
  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      try{
        await AsyncStorage.setItem('userToken', userToken);
      }catch(e){
        console.log(e);
      }
      
      dispatch({type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: async() => {
      try{
        await AsyncStorage.removeItem('userToken');
      }catch(e){
        console.log(e);
      }
      dispatch( {type: 'LOGOUT'});
    },
    signUp: () => {
      // TODO
    },
  }), []);

  // retrieve token
  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
      }catch(e){
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, [])

  if (loginState.isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          </Drawer.Navigator> 
        )
        :
          <RootStackScreen/>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


