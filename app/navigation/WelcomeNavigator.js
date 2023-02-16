import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createNativeStackNavigator();

function WelcomeNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Listings"
        component={ListingsScreen}
        options={styles.optionsListings}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={styles.optionsAbout}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
  optionsListings: {
    headerShown: true,
    title: "Recommended",
  },
  optionsAbout: {
    headerShown: true,
    title: "About Kasa",
  },
});

export default WelcomeNavigator;
