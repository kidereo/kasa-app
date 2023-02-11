import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import globalStyles from "./app/config/appStyles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.typography.label, styles.text]}>
        Initial installation of a very long text which will take forever to read
      </Text>
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
    color: globalStyles.colours.primary,
  },
});
