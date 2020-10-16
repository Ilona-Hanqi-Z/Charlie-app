import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, ActivityIndicator} from 'react-native';
import MainTabScreen from './screens/MainTabScreen';
import RootStackScreen from './screens/RootStackScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginPage from './screens/login/Login';

import { AuthContext } from './components/context';

import { DrawerContent } from './screens/DrawerContent';


const Drawer = createDrawerNavigator();

export default function App() {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

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

  const authContext = React.useMemo(() => ({
    signIn: (userName, password) => {
      // setUserToken('fkdj');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      if( userName === 'user' && password === 'pass') {
        userToken = "dfdsf";
      }
      dispatch({type: "LOGIN", id: userName, token: userToken});
    },
    signOut: () => {
      // setUserToken(null);
      // setIsLoading(false);
      dispatch({type: "LOGOUT"});
    },
    signUp: () => {
      // setUserToken('fkdj');
      // setIsLoading('false')
    }
  }), []);
  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
      dispatch({type: "RETRIEVE_TOKEN", token: "sdfsdf"});
    }, 1000);
  }, []);
  if ( loginState.isLoading ) {
      return(
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large"/>
          </View>

      );
  }
  return (
   <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { loginState.userToken !== null ? (
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      </Drawer.Navigator> 
      ):
      <RootStackScreen/>}
 
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