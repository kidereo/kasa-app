import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import appStyles from "./app/config/appStyles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[appStyles.text, styles.text]}>Initial installation</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: appStyles.colours.primary,
  },
});
