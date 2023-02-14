import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";

import globalStyles from "./app/config/appStyles";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/common/AppButton";
import Card from "./app/components/partials/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListingDetailsScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colours.white,
    padding: 0,
    paddingTop: 50,
  },
});
