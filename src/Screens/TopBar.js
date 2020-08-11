/*Icons name = youtube, video, search-web
text color: "white"
*/

import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

function Header() {
  return <View style={styles.header}></View>;
}

const styles = StyleSheet.create({
  header: {
  	height: 60,
  	backgroundColor: "red",
  
  }
});

export default Header;
