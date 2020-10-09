import React from 'react';
import { View, Text, TouchableOpacity,TextInput,Platform, StyleSheet,
        StatusBar, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../components/context';
import {Users} from '../model/users';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry:true, 
        isValidUser: true,
        isValidPassword: true,
    });

    const { signIn } = React.useContext(AuthContext);

    // username should be longer than 3 character
    const textInputChange = (val) => {
        if(val.trim().length >= 4){
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        }else{
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    // password should be longer than 7 character
    const handlePasswordChange = (val) => {
        if(val.trim().length >= 8){
            setData({
                ...data,
                password:val,
                isValidPassword: true
            });
        }else{
            setData({
                ...data,
                password:val,
                isValidPassword: false
            });
        }
        
    }

    // function when clicking on the eye icon
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    // determine whether username and password is valid; actually do the sign in
    const loginHandle = (username, password) => {
        const foundUser = Users.filter(item => {
            return username === item.username && password === item.password;
        });

        if(username.length === 0 || password.length === 0){
            Alert.alert('Invalid User!', 'Username or password field cannot be empty', [
                {text:'okay'}
            ]);
            return;
        }

        if(foundUser.length === 0){
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text:'okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return(
        <View style={styles.container}>
            {/* set the design of status bar (device date and time) */}
            <StatusBar backgroundColor="#ffc800" barStyle="light-content"/>

            {/* welcome header */}
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>

            {/* footer */}
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
                {/* Username section */}
                <Text style={styles.text_footer}>Email or @username</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#000"
                        size={20}
                        style={{marginTop:5}}
                    />
                    <TextInput
                        placeholder="Your Email or username"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </Animatable.View>
                    : null}
                </View>
                {/* determine whether username length is valid */}
                {data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                    </Animatable.View>
                }  

                {/* password section */}
                <Text style={[styles.text_footer, {marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#000"
                        size={20}
                        style={{marginTop:5}}
                    />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="green"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="green"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                {/* determine whether password length is valid */}
                {data.isValidPassword ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                </Animatable.View>
                }

               {/* forget password section  */}
                <TouchableOpacity>
                     <Text style={{color: 'grey', marginTop:15}}>Forgot password?</Text>
                </TouchableOpacity>
                
                {/* button section */}
                <View style={styles.button}>

                    {/* log in button */}
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {loginHandle(data.username, data.password)}}
                    >
                        <LinearGradient
                            colors={['#28313B', '#485461']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {color:'#fff'}]}>
                                Log In
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    {/* sign up button */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignUpScreen")}
                        style={[styles.signIn, {
                            borderColor: '#485461',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#485461'
                        }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                {/* social platform sign in section */}
                <View style={styles.socialplatform}>
                    <Text style={{color:'grey', fontSize: 16}}>
                        Or, Log In with
                    </Text>
                    <FontAwesome
                        name="twitter"
                        color="#1DA1F2"
                        size={20}
                        style={{marginLeft: 10}}
                    />
                    <FontAwesome
                        name="facebook"
                        color="#3b5998"
                        size={20}
                        style={{marginLeft: 10}}
                    />
                    <FontAwesome
                        name="instagram"
                        color="#C13584"
                        size={20}
                        style={{marginLeft: 10}}
                    />
                    <FontAwesome
                        name="google"
                        color="#db3236"
                        size={20}
                        style={{marginLeft: 10}}
                    />

                </View>
                
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ffc800'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#f2f2ed',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingVertical: 50
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#000',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        marginLeft:10,
        marginTop:5,
        marginRight:20,
        paddingLeft: 10,
        paddingBottom:5,
        color: '#000',
        borderBottomColor: 'grey', 
        borderBottomWidth: 0.17,
        fontSize:16
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    socialplatform: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'center',
    }
  });