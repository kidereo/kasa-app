import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import globalStyles from "../../config/appStyles";

function AppFooter(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo-white.png")}
        style={styles.image}
      />
      <Text style={globalStyles.typography.footer}>
        © 2023 Kasa. All rights reserved.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    backgroundColor: globalStyles.colours.black,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  image: { height: 15, width: 45, marginBottom: 5 },
});

export default AppFooter;
