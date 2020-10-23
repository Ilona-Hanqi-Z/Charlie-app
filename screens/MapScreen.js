/* This file contains the map assignment page. */

import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { LocationAccuracy } from 'expo-location';
import { Assignments } from '../model/assignment';

class MapScreen extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        region:null,
      }

      this._getLocationAsync();
    }

    _getLocationAsync = async() => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if(status !== 'granted'){
        console.log('Permission to access location was denied.')
      }

      let location = await Location.getCurrentPositionAsync({accuracy:LocationAccuracy.Highest});
      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.045
      }; 

      this.setState({region: region});
    }

    render(){
      let markers = [];
      for(let i = 0; i < Assignments.length; i++){
        markers.push(
          <Marker
            key = {i}
            coordinate={{
              latitude:Assignments[i].latitude,
              longitude:Assignments[i].longitude,
            }}
            icon={require('../assets/map_marker.png')}
            title={Assignments[i].title}
            description={Assignments[i].caption}
          />
        )
      }
      return (  
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <MapView
          initialRegion={this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          style={styles.map}
        >
          { markers }

        </MapView>
      </View>
    );
   }
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
