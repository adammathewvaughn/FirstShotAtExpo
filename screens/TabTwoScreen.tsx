import * as React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,  } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/tunj-bg1.png")} style={styles.container}>
        <View style={styles.header}><Text style={styles.headertext}>Tunj Control</Text></View>
      
        <View style={styles.TouchOp}>
          <TouchableOpacity style={styles.title} onPress={() => navigator.navigate("")}><Text style={styles.text}>Furniture Assembly</Text></TouchableOpacity>
          <TouchableOpacity style={styles.title} onPress={() => navigator.navigate("")}><Text style={styles.text}>De-clutter</Text></TouchableOpacity>
          <TouchableOpacity style={styles.title} onPress={() => navigator.navigate("")}><Text style={styles.text}>Appliance Rental</Text></TouchableOpacity>
          <TouchableOpacity style={styles.title} onPress={() => navigator.navigate("")}><Text style={styles.text}>Miscellaneous</Text></TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.footer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "cornflowerblue",
    padding: 5,
    flex: 1,
    borderRadius: 50,
  },
  text: {
    color: "white",
    padding: 10,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 100,
    width: "80%",
  },
  header: {
    paddingVertical: 0,
    marginVertical: 1,
    marginHorizontal: 45,
    borderRadius: 50,
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    paddingBottom:0,
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
  },
  headertext: {
    paddingVertical:0,
    marginVertical:0,
    textAlign: "center",
    flex: 1,
    fontSize: 40,
    fontWeight: "bold",
    color: "cornflowerblue",
  },
  TouchOp: {
    position: 'absolute',
    flex: .01,
    left: 0,
    right: 0,
    bottom: -10,
    flexDirection: "row",
    backgroundColor: "transparent",
    marginBottom: 25,
  },
});
