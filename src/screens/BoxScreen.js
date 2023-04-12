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
    // alignItems: "flex-end",
    // flexDirection: "row", //default is column
    // justifyContent: "flex-start",
  },
  textOneStyle: {
    flex: 4,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "flex-start",
  },
  textTwoStyle: {
    flex: 4,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "flex-end",
  },
  textThreeStyle: {
    flex: 2,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "center",
  },
});

export default BoxScreen;
