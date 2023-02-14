import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";

import globalStyles from "./app/config/appStyles";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/common/AppButton";
import Card from "./app/components/partials/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        title="Titre de la location"
        image={require("./app/assets/property-placeholder.jpg")}
      />
      <Card
        title="Titre de la location"
        //image={require("./app/assets/property-placeholder.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colours.white,
    padding: 20,
    paddingTop: 100,
  },
});
