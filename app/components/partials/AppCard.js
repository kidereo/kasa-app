import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import globalStyles from "../../config/appStyles";

function Card({ title = null, image = null }) {
  return (
    <ImageBackground source={image} style={styles.background}>
      <LinearGradient
        colors={["rgba(255,255,255,0)", "rgba(0,0,0,0.5)"]}
        style={styles.overlay}
      >
        <View style={styles.title}>
          <Text style={[globalStyles.typography.title, styles.title]}>
            {title}
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: 255,
    backgroundColor: globalStyles.colours.primary,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  overlay: {
    width: "100%",
    height: "100%",
    alignItems: "left",
    justifyContent: "flex-end",
    borderRadius: 10,
  },
  title: {
    color: globalStyles.colours.white,
    marginBottom: 10,
    marginLeft: 10,
    width: "70%",
  },
});

export default Card;
