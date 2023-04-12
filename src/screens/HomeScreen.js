import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi There</Text>
      <View style={styles.defaultButton}>
        <Button
          onPress={() => navigation.navigate("Components")}
          title="Go to Components Demo"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text style={styles.styleButton}>Go to List Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Image")}
        style={{ marginTop: 10 }}
      >
        <Text style={styles.defaultButton}>Go to Image Demo</Text>
      </TouchableOpacity>

      <View style={styles.defaultButton}>
        <Button
          onPress={() => navigation.navigate("Counter")}
          title="Go to Counter Demo"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Color")}>
        <Text style={styles.styleButton}>Go to Color Demo</Text>
      </TouchableOpacity>

      <View style={styles.defaultButton}>
        <Button
          onPress={() => navigation.navigate("Square")}
          title="Go to Square Demo"
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Text")}>
        <Text style={styles.styleButton}>Go to Text Input Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Box")}
        style={{ marginTop: 10 }}
      >
        <Text style={styles.defaultButton}>Go to Box Screen Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  defaultButton: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    marginBottom: 20,
  },

  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  styleButton: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "red",
    color: "white",
  },
});

export default HomeScreen;
