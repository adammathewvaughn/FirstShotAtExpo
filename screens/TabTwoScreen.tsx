import * as React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/tunj-bg1.png")} style={styles.container}>
        <Text style={styles.headertext}>Welcome to Tunj Control!</Text>
      
        <View style={styles.TouchOp}>
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
    minWidth: 400,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',  
    backgroundColor: "cornflowerblue",    padding: 5,
    flex: 1,
    borderRadius: 50,
  },
  text: {
    color: "white",
    padding: 10,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 100,
    width: '800%',
  },
  headertext: {
    paddingTop: 2,
    flex: 1,
    fontSize: 45,
    fontWeight: 'bold',
    color: "white", 
  },
  TouchOp: {
    width: 600,
    flexDirection: "row",
    backgroundColor: "transparent",
    marginHorizontal: "5%",
   paddingHorizontal: "2.5%",
    marginVertical: "2.5%",
   paddingVertical: "2.5%",
   justifyContent:"center",
   alignItems: 'center',
  },
});
