import * as React from 'react';
im
import styled from "styled-components/native";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Video from "react-native-video";

   

export default function TabOneScreen() {
  return (
    <View style={styled.container}>
        <Video
          source={require("../assets/20201118_162915.mp4")}
          style={styled.backgroundVideo}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          rate={1.0}
          ignoreSilentSwitch={"obey"}   
        />  
      <Text style={styled.title}>Oh, shit! I made an Android app!</Text>
      <View style={styled.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
