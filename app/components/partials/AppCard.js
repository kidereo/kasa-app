import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import globalStyles from "../../config/appStyles";
import AppRating from "../common/AppRating";

const { width } = Dimensions.get("window");
const height = width * 0.7;

function Card({ title = null, image = null, onPress, rating = null }) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <ImageBackground source={{ uri: image }} style={styles.background}>
        <LinearGradient
          colors={["rgba(255,255,255,0)", "rgba(0,0,0,0.7)"]}
          style={styles.overlay}
        >
          <View style={styles.titleContainer}>
            <Text style={[globalStyles.typography.title, styles.title]}>
              {title}
            </Text>
            <AppRating rating={rating} />
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
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
  titleContainer: { marginLeft: 10, width: "90%", marginBottom: 10 },
  title: {
    color: globalStyles.colours.white,
  },
});

export default Card;
