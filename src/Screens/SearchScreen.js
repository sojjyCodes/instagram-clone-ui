import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "tomato",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default SearchScreen;
