/*
dots-vertical, dots-horizontal,            List of icons that i will need
send = send, send-outline,
*/
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { StackNavigator } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "./src/Screens/HomeScreen";
import SearchScreen from "./src/Screens/SearchScreen";
import PostScreen from "./src/Screens/PostScreen";
import FeedScreen from "./src/Screens/FeedScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";

export default class App extends React.Component {
	render() {
		return <AppStackNavigator />;
	}
}

const AppStackNavigator = StackNavigator({
	Main: {
		home: HomeScreen,
	},
});
