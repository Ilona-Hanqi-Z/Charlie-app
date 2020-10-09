/* This file contains the home page. */

import React from 'react';
import { Text, View, Button } from 'react-native';

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
}

export default HomeScreen;