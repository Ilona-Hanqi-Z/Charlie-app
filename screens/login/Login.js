import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Text, View, Button, ImageBackGround,TextInput ,Dimensions} from 'react-native';
import { StackActions } from '@react-navigation/native';
import { StyleSheet} from 'react-native';







const { width : WIDTH} = Dimensions.get('window')

function LoginPage() {
        return(
            <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder={"Email or @username"}
                placeholderTextColor={'#CBCAC9'}
                underlineColorAndroid= "transparent" 
                
            />
              <TextInput style={styles.input}
                placeholder={"Password"}
                secureTextEntry={true}
                placeholderTextColor={'#CBCAC9'}
                underlineColorAndroid= "transparent" 
                
            />
            <Text styles={styles.bLogin}>
                LOG IN
            </Text>
            
          </View>
          



        );





}

export default LoginPage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2ed',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    input : {
        width : WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        borderBottomColor: '#ffc600',
        borderBottomWidth: 1,
        color: '#000',
        marginBottom: 10,
    },
    bLogin : {
       fontSize : 16,
       color: '#391226',
       textAlign : 'right',
        

    }
  });

