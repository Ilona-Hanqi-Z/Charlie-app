/* This file contains the map assignment page. */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { LocationAccuracy } from 'expo-location';
import { Assignments } from '../model/assignment';

class MapScreen extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        region:null,
        coordinate:[],
      }

      this._getLocationAsync();
      this._getCoordinatesAsync();
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

      this.setState({
        region: region,
      });
    }

    _getCoordinatesAsync = async() => {
      let coordinates=[];

      for(let i = 0; i < Assignments.length; i++){
        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${Assignments[i].address}&key=AIzaSyD80c8Ay-3S9r1lOg5rdgWoUg5fpzqupZ0`, {
          method: 'GET',
        });
        let result = await res.json();
        coordinates.push(result.results[0].geometry.location.lat);
        coordinates.push(result.results[0].geometry.location.lng)
      }
      this.setState({
        coordinate: coordinates
      })
      
    }

    render(){
      let markers = [];

      for(let i = 0; i < Assignments.length; i++){
        markers.push(
          <Marker
            key = {i}
            coordinate={{
              latitude:this.state.coordinate[2 * i],
              longitude:this.state.coordinate[2 * i + 1],
            }}
            icon={require('../assets/map_marker.png')}
            title={Assignments[i].title}
            description={Assignments[i].caption}
          >
            <Callout
              tooltip
              onPress={() => this.props.navigation.navigate('Camera')}
            >
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>{Assignments[i].id}. {Assignments[i].title}</Text>
                  <Text>{Assignments[i].caption}</Text>
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
            </Callout>
          </Marker>
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
  // Callout bubble
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight:"bold"
  },
});


// google api key: AIzaSyD80c8Ay-3S9r1lOg5rdgWoUg5fpzqupZ0