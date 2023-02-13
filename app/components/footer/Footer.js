import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import globalStyles from "../../config/appStyles";

function Footer(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo-white.png")}
        style={styles.image}
      />
      <Text style={[globalStyles.typography.body, styles.text]}>
        © 2023 Kasa. All rights reserved.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: globalStyles.colours.black,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { height: 15, width: 45 },
  text: {
    color: globalStyles.colours.white,
    fontSize: 12,
  },
});

export default Footer;
