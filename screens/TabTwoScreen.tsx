import * as React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/tunj-bg1.png")} style={styles.container}>
        <Text style={styles.headertext}>Welcome to Tunj Control!</Text>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
        <View style= {{"flexDirection":"row"}} >
          <TouchableOpacity style={styles.title} onPress={() => navigator.navigate("")}><Text style={styles.text}>Furniture Assembly</Text></TouchableOpacity>
          <TouchableOpacity style={styles.title} onPress={() => navigator.navigate("")}><Text style={styles.text}>De-clutter</Text></TouchableOpacity>
          <TouchableOpacity style={styles.title} onPress={() => navigator.navigate("")}><Text style={styles.text}>Appliance Rental</Text></TouchableOpacity>
          <TouchableOpacity style={styles.title} onPress={() => navigator.navigate("")}><Text style={styles.text}>Miscellaneous</Text></TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor:"blue",
    padding: 10,
    flex: 1,
    borderRadius: 50,
  },
  text: {
    color: "white",
    padding: 10,

    fontSize: 10,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 100,
    width: '8%',
  },
  headertext: {
    paddingTop: 2,
    flex: 1,
    fontSize: 45,
    fontWeight: 'bold',
    color: "white",
 
  },
});
