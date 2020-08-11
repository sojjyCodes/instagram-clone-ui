/*
home = home
profile = account-outline,
dots-vertical, dots-horizontal,            List of icons that i will need
feed = heart/heart-outlne,
post = plus, Ionics-add = add, add-outline
send = send, send-outline,
FontAwesome5-search = search or FontAwesome5Brands-search = sistrix*/
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import "react-navigation-tabs";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { MaterialCommunityIcons} from "@expo/vector-icons";
import HomeScreen from "./src/Screens/HomeScreen";
import SearchScreen from "./src/Screens/SearchScreen";
import PostScreen from "./src/Screens/PostScreen";
import FeedScreen from "./src/Screens/FeedScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
/*import TopBar from "./src/TopBar";
*/
const TabNavigator = createMaterialTopTabNavigator(
    {
		Home: HomeScreen,
        Search: SearchScreen,
        Post: PostScreen,
        Feed: FeedScreen,
        Profile: ProfileScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName = "home";

                switch (routeName) {
                    case "Home":
                        iconName = "home";
                        break;
                    case "Search":
                        iconName = "magnify";
                        break;
                    case "Post":
                        iconName = "plus";
                        break;
                    case "Feed":
                        iconName = "heart";
                        break;
                    case "Profile":
                        iconName = "account-outline";
                        break;
                }

                return (
                    <MaterialCommunityIcons
                        name={iconName}
                        size={24}
                        color={tintColor}
                    />
                );
                
            },
        }),
        tabBarOptions: {
            style: {
                backgroundColor: "white",
				bottomMargin: 30,
            },
            activeTintColor: "blue",
            inactiveTintColor: "black",
            showIcon: true,
            showLabel: false,
            indicatorStyle: {
                opacity: 100,
				backgroundColor: "blue",
            },
        },
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
    }
);

export default createAppContainer(TabNavigator);
