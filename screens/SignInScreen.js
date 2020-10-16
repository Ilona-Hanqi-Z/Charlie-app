import React from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
    TextInput,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';

import FontAwsome from 'react-native-vector-icons/FontAwesome';

import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../components/context';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState ({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
       
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if ( val.length >=4) {
                setData({
                    ...data,
                    email: val,
                    check_textInputChange: true
                });
            } else {
                setData({
                    ...data,
                    email: val,
                    check_textInputChange: false
                });
            }
    }

    const handlePasswordChange = (val) => {
            setData({
                ...data,
                password: val
            });

    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const loginHandle = (username, password) => {
        signIn(username,password);
    }
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content"/>
           <View style={styles.header}>
               <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View 
                    animation="fadeInUpBig"
                    style={styles.footer}
             >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwsome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                        />
                        <TextInput
                            placeholder="Email or @username"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText= {(val) =>  textInputChange(val)}
                        />
                        {data.check_textInputChange ? 
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather 
                            name="check-circle"
                            color="red"
                            size={20}
                        /> 
                        </Animatable.View>
                        : null}
                </View>
                <Text style={[styles.text_footer,{
                    marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color="#05375a"
                        size={20}
                        />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                                onPress = {updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                             <Feather 
                               name="eye-off"
                               color="red"
                               size={20}
                             /> 
                             :
                             <Feather 
                               name="eye"
                               color="red"
                               size={20}
                             />
                            } 
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Text style= {{color: "#ffc600", marginTop:15}}>Forgot password?</Text>
                    </TouchableOpacity>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress= {() => {loginHandle( data.username, data.password)}}
                        >
                        <LinearGradient
                             colors={['#ffc600','#ffe900']}
                             style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign In</Text>
                        </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress = {() => navigation.navigate("SignUpScreen")}
                            style={[styles.signIn,{
                                borderColor: '#ffc600',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                                <Text style={[styles.textSign, {
                                    color: '#ffc600'
                                }]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ffc600'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
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
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
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
    }
  });