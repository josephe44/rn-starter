import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    alignItems: "flex-end",
    flexDirection: "row", //default is column
    justifyContent: "flex-end",
  },
  textOneStyle: {
    flex: 2,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "flex-start",
    height: 50,
  },
  textTwoStyle: {
    flex: 2,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "center",
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // ...StyleSheet.absoluteFillObject, //this is a shortcut for the above 4 lines
    fontSize: 18,
    height: 50,
  },
  textThreeStyle: {
    flex: 2,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "flex-start",
    height: 50,
  },
});

export default BoxScreen;
