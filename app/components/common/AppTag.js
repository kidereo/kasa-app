import React from "react";
import { View, StyleSheet, Text } from "react-native";

import globalStyles from "../../config/appStyles";

function AppTag({ tag }) {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.typography.body, styles.tag]}>{tag}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.colours.primary,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },
  tag: {
    fontSize: 16,
    color: globalStyles.colours.white,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});

export default AppTag;
