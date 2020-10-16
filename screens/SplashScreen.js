import React from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SplahScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
           
            <View style={styles.header}>
                <Animatable.Image 
                        animation="bounceIn"
                      
                    source={require('../assets/fresco.png')}
                    style={styles.logo}
                    reesizeMode="stretch"
                    />
            </View>
            <Animatable.View style={styles.footer}
                             animation="fadeInUpBig"
            >
                <Text style={styles.title}>Share Your Story With World!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress = {() => navigation.navigate('SignInScreen')}>
                    <LinearGradient
                        colors={['#ffc600','#ffe900']}
                        style={styles.signIn}>
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons
                        name="navigate-next"
                        color="#fff"
                        size={20}
                        />
                    </LinearGradient>
                    
                </TouchableOpacity>
                </View>
                
            </Animatable.View>
        </View>
    );
};

export default SplahScreen;

const {height} = Dimensions.get("screen");
const height_logo = height*0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ffc600'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });