/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import MyFontIcon, { MyFontIcons } from "./MyFontIcon";


export default class customfont extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
          <MyFontIcon>{MyFontIcons.album}</MyFontIcon>
        </Text>
        <Text style={{margin: 10, textAlign: 'left'}}>
          <MyFontIcon style={{margin: 10, fontSize: 45, textAlign: 'center'}}>{MyFontIcons.adminAppearance}</MyFontIcon>
        </Text>
        <Text style={styles.instructions}>
            To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontFamily: "vincHand",
    fontSize: 30,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    fontFamily: "vincHand",
    fontSize: 20,
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
});

AppRegistry.registerComponent("customfont", () => customfont);
