import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>Profile Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgreen",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ProfileScreen;








