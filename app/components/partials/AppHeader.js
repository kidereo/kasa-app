import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function AppHeader(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo-primary.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20, alignItems: "left" },
  image: {
    height: 34,
    width: 105,
    marginLeft: 10,
  },
});

export default AppHeader;
