import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
=======
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
>>>>>>> origin/hanqi
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc600',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


