import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import Footer from "../components/footer/Footer";

import globalStyles from "../config/appStyles";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/hero-home.jpg")}
      style={styles.background}
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
        <View style={styles.listingsButton}>
          <Text
            style={[globalStyles.typography.label, styles.listingsButtonLabel]}
          >
            Listings
          </Text>
        </View>
        <View style={styles.aboutButton}>
          <Text
            style={[globalStyles.typography.label, styles.aboutButtonLabel]}
          >
            About
          </Text>
        </View>
        <Footer />
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
  logoContainerLogo: { width: 210, height: 68 },
  LogoContainerText: {
    color: globalStyles.colours.white,
    textAlign: "center",
    marginTop: 30,
  },
  listingsButton: {
    width: "90%",
    height: 70,
    backgroundColor: globalStyles.colours.primary,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  listingsButtonLabel: {
    color: globalStyles.colours.white,
  },
  aboutButton: {
    width: "90%",
    height: 70,
    backgroundColor: globalStyles.colours.white,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  aboutButtonLabel: {
    color: globalStyles.colours.primary,
  },
});

export default WelcomeScreen;
