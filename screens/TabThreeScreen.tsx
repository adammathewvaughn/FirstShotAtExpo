import * as React from "react";
import { StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";

export default function TabThreeScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/images/tunj-bg2.png")}
                style={styles.container}
            >
                <Text style={styles.headertext}>Tunj Control</Text>
                <View style={styles.TouchOp}>
                   <TouchableOpacity style={styles.title} onPress={() => navigator.navigate("")} ><Text style={styles.text}>Furniture Assembly</Text></TouchableOpacity>
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
    headertext: {
        
        paddingTop: 2,
        flex: 1,
        fontSize: 45,
        fontWeight: "bold",
        color: "cornflowerblue",
    },
    TouchOp: {
        flexDirection: "row",
        backgroundColor: "transparent",
        marginBottom: 25,
    },
});
