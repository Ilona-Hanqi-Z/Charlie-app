import React from 'react';
import { Text, View, Button } from 'react-native';

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        {/* <Button 
          title="Go to Map screen"
          onPress={() => navigation.navigate("Map")}
        >
        </Button> */}
      </View>
    );
}

export default HomeScreen;