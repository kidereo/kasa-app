import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../../config/appStyles";

function AppDropdown({ title, content }) {
  const [contentVisible, setContentVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setContentVisible(!contentVisible)}
      >
        <View style={styles.titleContainer}>
          <Text
            style={[
              globalStyles.typography.subTitle,
              styles.titleContainerText,
            ]}
          >
            {title}
          </Text>
          {contentVisible ? (
            <MaterialCommunityIcons
              name="chevron-up"
              color={globalStyles.colours.white}
              size={40}
            />
          ) : (
            <MaterialCommunityIcons
              name="chevron-down"
              color={globalStyles.colours.white}
              size={40}
            />
          )}
        </View>
      </TouchableOpacity>
      {contentVisible ? (
        <View style={styles.contentContainer}>
          <Text
            style={[globalStyles.typography.body, styles.contentContainerText]}
          >
            {content}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: globalStyles.colours.primary,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContainerText: {
    color: globalStyles.colours.white,
  },
  contentContainer: {
    backgroundColor: globalStyles.colours.light,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  contentContainerText: {},
});

export default AppDropdown;
