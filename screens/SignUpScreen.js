import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const SignUpScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>SignUpScreen</Text>
            <Button 
                title= "Click here"
                onPress={() => alert('Button Cliked!')}
            />
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

})