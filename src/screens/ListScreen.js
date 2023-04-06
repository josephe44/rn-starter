import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 45 },
    { name: "Friend #3", age: 32 },
    { name: "Friend #4", age: 27 },
    { name: "Friend #5", age: 53 },
    { name: "Friend #6", age: 30 },
    { name: "Friend #7", age: 21 },
    { name: "Friend #8", age: 19 },
    { name: "Friend #9", age: 18 },
  ];
  return (
    <View>
      <FlatList
        horizontal // makes the list horizontal
        showsHorizontalScrollIndicator={false} // hides the horizontal scroll bar
        keyExtractor={(friend) => friend.name} // keyExtractor is a required prop
        data={friends} // data is a required prop
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }} // renderItem is a required prop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: "red",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

export default ListScreen;
