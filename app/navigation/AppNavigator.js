import React from "react";
import { View, StyleSheet, Platform, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../config/appStyles";
import appFonts from "../config/appFonts";
import AboutScreen from "../screens/AboutScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ListingNavigator from "./ListingNavigator";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName="listingsScreen"
      screenOptions={
        {
          // tabBarActiveBackgroundColor: globalStyles.colours.primary,
          // tabBarActiveTintColor: globalStyles.colours.white,
          // tabBarInactiveBackgroundColor: globalStyles.colours.light,
          // tabBarInactiveTintColor: globalStyles.colours.primary,
        }
      }
    >
      <Tab.Screen
        name="welcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
          title: "Home",
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily:
              Platform.OS === "android" ? appFonts.android : appFonts.ios,
          },
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="listingsScreen"
        component={ListingNavigator}
        options={{
          headerShown: false,
          title: "Recommended",
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily:
              Platform.OS === "android" ? appFonts.android : appFonts.ios,
          },
          tabBarIcon: ({ size, color }) => (
            <View style={styles.welcomeBarButton}>
              <Image
                style={styles.welcomeBarButtonImage}
                source={require("../assets/favicon-white.png")}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="aboutScreen"
        component={AboutScreen}
        options={{
          headerShown: false,
          title: "About Kasa",
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily:
              Platform.OS === "android" ? appFonts.android : appFonts.ios,
          },
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="frequently-asked-questions"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
  welcomeBarButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: globalStyles.colours.primary,
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    borderColor: globalStyles.colours.white,
    borderWidth: 5,
  },
  welcomeBarButtonImage: {
    height: 40,
    width: 40,
  },
});

export default AppNavigator;
