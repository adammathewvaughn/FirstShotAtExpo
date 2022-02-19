import * as React from 'react';
import { StyleSheet, ImageBackground  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';

import { Text, View,} from '../components/Themed';
import { Video } from 'expo-av';


   

export default function TabOneScreen() {
  return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/images/icon.png")}style= {styles.container}>
          {/* <Video
              source={require("../assets/20201118_162915.mp4")}
              style={styles.container}
              resizeMode={"cover"}
               />  */}
        <Text style={styles.title}>Look, Ma! I made an Android app!</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
    fontSize: 20,
    fontWeight: 'bold',
    color: "red"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
