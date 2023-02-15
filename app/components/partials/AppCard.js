import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import globalStyles from "../../config/appStyles";

const { width } = Dimensions.get("window");
const height = width * 0.7;

function Card({ title = null, image = null }) {
  return (
    <ImageBackground source={{ uri: image }} style={styles.background}>
      <LinearGradient
        colors={["rgba(255,255,255,0)", "rgba(0,0,0,0.7)"]}
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
    height: height,
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
    width: "80%",
  },
});

export default Card;
