import * as React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';

import { Text, View,} from '../components/Themed';
import { Video } from 'expo-av';


   

export default function TabOneScreen() {
  return (
      
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/tunj-bg1.png")} style={styles.container}>
        <Text style={styles.headertext}>Tunj Control</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={{flexDirection: "row" }} >
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
  text: {
    padding: 10,
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: "cornflowerblue",
  },
  title: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',  
    height: 70,
    backgroundColor: "white",
    padding: 10,
    flex: 1,
    borderRadius: 50,
  },
  separator: {
    marginTop: 30,
    marginBottom:150,
    height: 1,
    width: '5%',
  },
  headertext: {
    paddingTop: 2,
    flex: 1,
    fontSize: 45,
    fontWeight: 'bold',
  },
});
