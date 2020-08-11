import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

function FeedScreen() {
    return (
        <View style={styles.container}>
            <Text>Notification Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
});
FeedScreen();
