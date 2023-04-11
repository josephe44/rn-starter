import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const COUNTER_NUM = 1;

// Reducer function
const reducer = (state, action) => {
  //  state === {counter: number}
  // action === {type: 'increase' || 'decrease', payload: 1}

  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // using reducer
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  // using useState
  // const [counter, setCounter] = useState(0);

  // const handleIncrease = () => {
  //   setCounter(counter + 1);
  // };

  // const handleDecrease = () => {
  //   setCounter(counter - 1);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Current Count: {counter}</Text>

      <View style={styles.defaultButton}>
        <Button
          title="Increase"
          onPress={() => dispatch({ type: "increase", payload: COUNTER_NUM })}
        />
      </View>

      <View style={styles.defaultButton}>
        <Button
          title="Decrease"
          onPress={() =>
            dispatch({ type: "increase", payload: -1 * COUNTER_NUM })
          }
        />
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
