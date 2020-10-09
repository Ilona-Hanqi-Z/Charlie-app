/* This file contains the main page that will show up 
   when a user logs in. */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';
import CameraScreen from './CameraScreen';
import NewsScreen from './NewsScreen';
import ProfileScreen from './ProfileScreen';

// home, profile, and gallery will have the title tab
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NewsStack = createStackNavigator();

function HomeStackScreen({navigation}){
    return(
        <HomeStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: '#ffc600',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
        }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}
            backgroundColor="#ffc600" onPress={() => {navigation.openDrawer();}}>
            </Icon.Button>
            )
        }} />
        </HomeStack.Navigator>
    );
};
  
function ProfileStackScreen({navigation}){
    return(
        <ProfileStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: '#ffc600',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
        }}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}
            backgroundColor="#ffc600" onPress={() => {navigation.openDrawer();}}>
            </Icon.Button>
        )
        }} />
        </ProfileStack.Navigator>
    );
};

function NewsStackScreen({navigation}){
    return(
        <NewsStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: '#ffc600',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
        }}>
        <NewsStack.Screen name="Gallery" component={NewsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}
            backgroundColor="#ffc600" onPress={() => {navigation.openDrawer();}}>
            </Icon.Button>
        )
        }} />
        </NewsStack.Navigator>
    );
};

// bottom tab: home, gallery, camera, assignment, and profile
const Tab = createBottomTabNavigator();

function MainTabScreen(){
    return (
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#000', 
          }}
        >
        <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
        name="News"
        component={NewsStackScreen}
        options={{
            tabBarLabel: 'News',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="newspaper" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="camera-iris" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="map" color={color} size={size} />
            ),
            // tabBarBadge: 3,
        }}
        />
        <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
                <Icon name="ios-person" color={color} size={size} />
            ),
        }}
        />
    </Tab.Navigator>
    );
}

export default MainTabScreen;

