import React from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';

const SplahScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SplahScreen</Text>
            <View style={styles.header}>
                <Image 
                    source={require('../assets/fresco.png')}
                    style={styles.logo}
                    reesizeMode="stretch"
                    />
            </View>
            <View style={styles.footer}>
                <Text>Share Your Story With World!</Text>
                <Text>Sign in with account</Text>
                
            </View>
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
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
 

});