import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import globalStyles from "../../config/appStyles";

function AppButton({
  title,
  labelColor = "primary",
  buttonColor = "white",
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: globalStyles.colours[buttonColor] },
      ]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Text
        style={[
          globalStyles.typography.label,
          { color: globalStyles.colours[labelColor] },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: globalStyles.colours.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "90%",
    marginVertical: 10,
  },
});

export default AppButton;
