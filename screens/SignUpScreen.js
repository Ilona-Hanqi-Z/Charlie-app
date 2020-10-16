/*This file should contain register page. */
import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../components/context';

var qs = require('qs');

const SignUpScreen = ({navigation}) => {

    const [availability, setAvailability] = React.useState("");
    const [data, setData] = React.useState({
        email: '',
        username: '',
        password: '',
        confirm_password:'',
        check_textInputChange: false,
        check_emailInputChange:false,
        secureTextEntry:true,
        confirm_secureTextEntry:true
    });
    const { signUp } = React.useContext(AuthContext);

    React.useEffect(() => {
        const fetchAvailability = async () => {
          try{
            const response = await fetch(`http://localhost:4040/v2/user/check?username=${data.username}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer G0jz1XRbq5FbjWSWJfBB9MkIi6jphORS5iOpvpdD6fAdawkS7qZwTRPk86BXeM8hfn1l7Qws4u80Gu8Psih6SvuUtGIDuJxZj47Xy4rbaZ98qc6icglknPvkZfG1Ix9X'
            }
          });
            let json = await response.json();
            setAvailability(json.available);
          }catch(error) {
            console.error(error);
          } 
        };
        fetchAvailability();
      });

    const textInputChange = (val) => {
        if(val.length !== 0){
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        }else{
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const emailInputChange = (val) => {
        if(val.length !== 0){
            setData({
                ...data,
                email: val,
                check_emailInputChange: true
            });
        }else{
            setData({
                ...data,
                email: val,
                check_emailInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password:val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password:val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const SignupHandle = async(email, username, password, confirm_password) => {
    
        if(password !== confirm_password){
            Alert.alert('Invalid password!', 'passwords do not match', [
                {text:'okay'}
            ]);
            return;
        }
        
        // TODO: if available, then create the new user
        if(!availability){
            Alert.alert('Invalid username!', 'Username has been taken', [
                {text:'okay'}
            ]);
            return;
        }else{
            try{
                const response = await fetch('http://localhost:4040/v2/user/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer G0jz1XRbq5FbjWSWJfBB9MkIi6jphORS5iOpvpdD6fAdawkS7qZwTRPk86BXeM8hfn1l7Qws4u80Gu8Psih6SvuUtGIDuJxZj47Xy4rbaZ98qc6icglknPvkZfG1Ix9X'
                    },
                    body: qs.stringify({
                        email: email,
                        username: username,
                        password: password
                    })
                });
                console.log(response.json);
            }catch(error){
                console.error(error);
            }
            signUp(username, "usertoken");  
        }
        
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#ffc800" barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>

            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#000"
                        size={20}
                        style={{marginTop:5}}
                    />
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => emailInputChange(val)}
                    />
                    {data.check_emailInputChange ? 
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

                <Text style={[styles.text_footer, {marginTop: 20}]}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#000"
                        size={20}
                        style={{marginTop:5}}
                    />
                    <TextInput
                        placeholder="Your username"
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

                <Text style={[styles.text_footer, {marginTop:20}]}>Password</Text>
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

                <Text style={[styles.text_footer, {marginTop:20}]}>
                    Confirm Password
                </Text>
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
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.confirm_secureTextEntry ?
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

                <View style={styles.button}>
                    <TouchableOpacity 
                        style={styles.signIn}
                        onPress={() => {SignupHandle(data.email, data.username, data.password, data.confirm_password)}}
                    >
                        <LinearGradient
                            colors={['#28313B', '#485461']}
                            style={styles.signIn}    
                        >
                            <Text style={[styles.textSign, {color:'#fff'}]}>
                                Sign up
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    

                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignInScreen")}
                        style={[styles.signIn, {
                            borderColor: '#485461',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#485461'
                        }]}>Sign in</Text>
                    </TouchableOpacity>
                </View>

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

export default SignUpScreen;

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
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    }
  });