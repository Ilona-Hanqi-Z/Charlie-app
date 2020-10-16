/* This file contains the user profile page. */

import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';

function ProfileScreen({navigation}) {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    React.useEffect(() => {
      const fetchProfile = async () => {
        try{
          const response = await fetch('http://localhost:4040/v2/user/me', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer 9qS0G91prA5APk1N8mzLIbXfqB4idhe53PhaoATDz6EnivOpT3ZqKDnLisXqLviajC4ORs0lJus9ph7tibFKZYI7rZsYAl6WXIgx1ycpjhkPBhl9Z9c93joWFS6weP4e'
          }
        });
          let json = await response.json();
          setUsername(json.username);
          setEmail(json.email);
        }catch(error) {
          console.error(error);
        } 
      };
      fetchProfile();
    }, []);

    return (
      <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>

              <View style={{ alignSelf: "center", marginTop: 20 }}>
                  <View style={styles.profileImage}>
                      <Image source={require("../assets/avatar.png")} style={styles.image} resizeMode="center"></Image>
                  </View>        
              </View>

              <View style={styles.infoContainer}>
                  <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{username}</Text>
                  <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>{email}</Text>
              </View>

              <View style={styles.statsContainer}>
                  <View style={styles.statsBox}>
                      <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
                      <Text style={[styles.text, styles.subText]}>Posts</Text>
                  </View>
                  <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                      <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                      <Text style={[styles.text, styles.subText]}>Followers</Text>
                  </View>
                  <View style={styles.statsBox}>
                      <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                      <Text style={[styles.text, styles.subText]}>Following</Text>
                  </View>
              </View>
              <View>
                <Text style={{textAlign: "center", marginTop: 50}}>POSTS SHOULD BE HERE</Text>
              </View>
          </ScrollView>
      </SafeAreaView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#FFF"
  },
  text: {
      fontFamily: "HelveticaNeue",
      color: "#52575D"
  },
  image: {
      flex: 1,
      height: undefined,
      width: undefined
  },
  titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 24,
      marginHorizontal: 16
  },
  subText: {
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500"
  },
  profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden"
  },
  infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 16
  },
  statsContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 32
  },
  statsBox: {
      alignItems: "center",
      flex: 1
  },
});