import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import AppButton from "../components/common/AppButton";
import AppFooter from "../components/partials/AppFooter";

import globalStyles from "../config/appStyles";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/hero-home.jpg")}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-primary.png")}
            style={styles.logoContainerLogo}
          />
          <Text
            style={[globalStyles.typography.headline, styles.LogoContainerText]}
          >
            Chez vous,{"\n"}partout et ailleurs
          </Text>
        </View>
        <AppButton
          title="Listings"
          labelColor="white"
          buttonColor="primary"
          onPress={() => console.log("Listings Pressed")}
        />
        <AppButton title="About" onPress={() => console.log("About Pressed")} />
        <AppFooter />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoContainer: {
    flex: 1,
    position: "absolute",
    top: 100,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoContainerLogo: { width: 140, height: 45 },
  LogoContainerText: {
    color: globalStyles.colours.white,
    textAlign: "center",
    marginTop: 30,
  },
});

export default WelcomeScreen;
