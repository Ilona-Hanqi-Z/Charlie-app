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
    StatusBar
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password:'',
        check_textInputChange: false,
        secureTextEntry:true,
        confirm_secureTextEntry:true
    });

    const textInputChange = (val) => {
        if(val.length !== 0){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        }else{
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

                <Text style={[styles.text_footer, {marginTop:35}]}>
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

                <View style={styles.button}>
                    <LinearGradient
                        colors={['#28313B', '#485461']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {color:'#fff'}]}>
                            Sign up
                        </Text>
                    </LinearGradient>

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
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'center',
    }
  });