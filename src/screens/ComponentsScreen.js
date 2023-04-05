import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "My name is John Jane";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.subTextStyle}>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    fontVariant: ["small-caps"],
    color: "red",
  },

  subTextStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
