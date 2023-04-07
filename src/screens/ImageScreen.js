import react from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ImageScreen</Text>
      <ImageDetails
        title="Forest Image"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={9}
      />
      <ImageDetails
        title="Beach Image"
        imageSource={require("../../assets/beach.jpg")}
        imageScore={7}
      />
      <ImageDetails
        title="Mountain Image"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={4}
      />
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
});

export default ImageScreen;
