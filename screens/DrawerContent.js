/* This file contains the drawer contents 
   that will appear on the left 
   when the user swipes to the right. */

import React from 'react';
import {View, StyleSheet } from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer,} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../components/context';
import AsyncStorage from '@react-native-community/async-storage';

export function DrawerContent(props){

    const { signOut } = React.useContext(AuthContext);

    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [following, setFollowing] = React.useState("");
    const [follower, setFollower] = React.useState("");
    const [avatar, setAvatar] = React.useState("");

    React.useEffect(() => {
      const fetchProfile = async () => {
        try{
          const usertoken = await AsyncStorage.getItem('userToken');
          const response = await fetch('http://ec2-3-238-129-128.compute-1.amazonaws.com:4040/v2/user/me', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${usertoken}`
          }
        });
          let json = await response.json();
          setUsername(json.username);
          setEmail(json.email);
          setFollower(json.followed_count);
          setFollowing(json.following_count);
          setAvatar(json.avatar);
        }catch(error) {
          console.error(error);
        } 
      };
      fetchProfile();
    }, []);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    {/* user info section */}
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            {avatar != null ? 
                              <Avatar.Image
                                  source={{uri: avatar}}
                                  size={50}
                              />
                              :
                              <Avatar.Image
                                  source={require('../assets/avatar.png')}
                                  size={50}
                              />
                            }

                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{username}</Title>
                                <Caption style={styles.caption}>{email}</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>{following}</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>{follower}</Paragraph>
                                <Caption style={styles.caption}>Follower</Caption>
                            </View>
                        </View>
                    </View>

                    {/* navigate items section */}
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}          
                        >
                        </DrawerItem>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                name="newspaper"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Stories"
                            onPress={() => {props.navigation.navigate('News')}}          
                        >
                        </DrawerItem>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                name="map"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Assignments"
                            onPress={() => {props.navigation.navigate('Map')}}          
                        >
                        </DrawerItem>
                    </Drawer.Section>

                    {/* setting and feedback section */}
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                name="settings-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingScreen')}}          
                        >
                        </DrawerItem>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                name="help-circle"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Help & Feedback"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}          
                        >
                        </DrawerItem>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            
            {/* sign out section */}
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}          
                >
                </DrawerItem>
            </Drawer.Section>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
      flex:1

    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
});