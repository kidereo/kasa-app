import React from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import AppDropdown from "../components/common/AppDropdown";
import AppFooter from "../components/partials/AppFooter";
import AppHeader from "../components/partials/AppHeader";
import appAbouts from "../config/appAbouts";

function AboutScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <AppHeader />
      <View style={styles.contentContainer}>
        <ImageBackground
          source={require("../assets/hero-about.jpg")}
          style={styles.imageBackground}
        >
          <View style={styles.imageOverlay} />
        </ImageBackground>
        <View style={styles.dropdownsContainer}>
          <AppDropdown title="Fiabilité" content={appAbouts.fiabilite} />
          <AppDropdown title="Respect" content={appAbouts.respect} />
          <AppDropdown title="Service" content={appAbouts.service} />
          <AppDropdown title="Sécurité" content={appAbouts.securite} />
        </View>
      </View>
      <AppFooter />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageBackground: {
    height: 255,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  imageOverlay: { backgroundColor: "rgba(0,0,0,0.3)", flex: 1 },
  contentContainer: { paddingHorizontal: 10 },
  dropdownsContainer: {
    marginVertical: 10,
    justifyContent: "space-evenly",
  },
});

export default AboutScreen;
