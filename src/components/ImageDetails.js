import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = ({ title, imageSource, imageScore }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>image score - {imageScore}</Text>
      <Image source={imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
