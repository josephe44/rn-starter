import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

// Reducer function
const reducer = (state, action) => {
  //  state === {red: number, green: number, blue: number}
  // action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

  switch (action.type) {
    case "change_red":
      return state.red + action.amount > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // using reducer
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  //   using useState
  // const [red, setRed] = useState(0);
  // const [blue, setBlue] = useState(0);
  // const [green, setGreen] = useState(0);

  //   helper function
  // using setColor on useState
  // const setColor = (color, change) => {
  //   //   color === 'red', 'green', 'blue'
  //   //   change === +15, -15

  //   // // Red
  //   // if (color === "red") {
  //   //   if (red + change > 255 || red + change < 0) {
  //   //     return;
  //   //   } else {
  //   //     setRed(red + change);
  //   //   }
  //   // }

  //   // // Blue
  //   // if (color === "blue") {
  //   //   if (blue + change > 255 || blue + change < 0) {
  //   //     return;
  //   //   } else {
  //   //     setBlue(blue + change);
  //   //   }
  //   // }

  //   // // Green
  //   // if (color === "green") {
  //   //   if (green + change > 255 || green + change < 0) {
  //   //     return;
  //   //   } else {
  //   //     setGreen(green + change);
  //   //   }
  //   // }

  //   switch (color) {
  //     case "red":
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       return;
  //     case "blue":
  //       blue + change > 255 || blue + change < 0
  //         ? null
  //         : setBlue(blue + change);
  //       return;
  //     case "green":
  //       green + change > 255 || green + change < 0
  //         ? null
  //         : setGreen(green + change);
  //       return;
  //     default:
  //       return;
  //   }
  // };

  return (
    <View>
      <Text>
        {red} {blue} {green}
      </Text>
      <Text>Square Screen</Text>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
