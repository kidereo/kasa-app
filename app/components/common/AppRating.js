import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

function AppRating({ rating }) {
  const maxRating = 5;
  return (
    <View style={styles.container}>
      {Array.from({ length: rating }, (element, index) => (
        <Image
          key={index}
          source={require("../../assets/star-primary.png")}
          style={styles.image}
        />
      ))}
      {Array.from({ length: maxRating - rating }, (element, index) => (
        <Image
          key={index}
          source={require("../../assets/star-medium.png")}
          style={styles.image}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: { height: 25, width: 25, marginRight: 5 },
});

export default AppRating;
