import React from "react";
import { View, Text, StyleSheet } from "react-native";

function PostScreen() {
    return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>
				PostScreen
			</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default PostScreen;
