import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>this is my name: {name}</Text>
      <Text>this also my password: {password}</Text>

      {/* TextInput for name */}
      <TextInput
        style={styles.input}
        autoCapitalize="none" //turn off capitalization of first letter
        autoCorrect={false} //turn off auto correction ( when handling email addresses and passwords)
        placeholder="enter your name"
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />

      {/* TextInput for password */}
      <TextInput
        style={styles.input}
        autoCapitalize="none" //turn off capitalization of first letter
        autoCorrect={false} //turn off auto correction ( when handling email addresses and passwords)
        placeholder="enter your password"
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
        secureTextEntry={true} //turn off password visibility
      />
      {password.length < 5 ? (
        <Text>Password must be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
});

export default TextScreen;
