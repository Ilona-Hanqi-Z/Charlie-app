/*This file contains the stack of the initial splash page, 
  register page, and sign in page. */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
      <RootStack.Navigator headerMode='none'>
          <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
          <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
          <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
      </RootStack.Navigator>
);

export default RootStackScreen;