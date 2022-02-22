import * as React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/images/adaptive-icon.png")} style={styles.container}>
                <Text style={styles.text}>Welcome to Tunj Control!</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <View style={{ flexDirection: "row" }} >
                    <TouchableOpacity style={styles.title} onPress={() => navigator.navigate("")}><Text>Furniture Assembly</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.title} onPress={() => navigator.navigate("")}><Text>De-clutter</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.title} onPress={() => navigator.navigate("")}><Text>Appliance Rental</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.title} onPress={() => navigator.navigate("")}><Text>Miscellaneous</Text></TouchableOpacity>
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
        backgroundColor: "powderblue",
        padding: 10,
        flex: 1,
        borderRadius: 50,
    },
    text: {
        padding: 10,
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    
});