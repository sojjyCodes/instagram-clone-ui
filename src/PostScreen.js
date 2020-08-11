import React from "react";
import { View, Text, StyleSheet } from "react-native";

function PostScreen() {
    return (
        <View style={styles.container}>
            <Text>PostScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
});

PostScreen();
