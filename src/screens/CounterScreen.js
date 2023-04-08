import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Current Count: {counter}</Text>

      <View style={styles.defaultButton}>
        <Button title="Increase" onPress={() => handleIncrease()} />
      </View>

      <View style={styles.defaultButton}>
        <Button title="Decrease" onPress={() => handleDecrease()} />
      </View>
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
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  defaultButton: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    marginBottom: 20,
  },
});

export default CounterScreen;
