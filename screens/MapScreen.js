/* This file contains the map assignment page. */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { LocationAccuracy } from 'expo-location';

function MapScreen() {
    const [region, setRegion] = React.useState({
        latitude: "",
        longitude: "",
        latitudeDelta: "",
        longitudeDelta: "",
    });

    React.useEffect(() => {
      const getLocationAsync = async() => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if(status !== 'granted'){
          console.log('Permission to access location was denied.')
        }
  
        let location = await Location.getCurrentPositionAsync({accuracy:LocationAccuracy.Highest});
        console.log(location);
        let region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.045,
          longitudeDelta: 0.045
        }
  
        this.setRegion({region: region});
      }
  
      getLocationAsync();
      
    }, );

    


    return (  
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MapView
          style={styles.map}
          initialRegion={region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
        />
      </View>
    );
  }

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});