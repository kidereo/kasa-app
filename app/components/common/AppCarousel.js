import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  Dimensions,
} from "react-native";

import globalStyles from "../../config/appStyles";

const { width } = Dimensions.get("window");
const height = width * 0.7;

function AppCarousel({ images }) {
  return (
    <View style={styles.container}>
      {images && images.length ? (
        <ScrollView
          horizontal={true}
          nestedScrollEnabled
          showsHorizontalScrollIndicator={true}
        >
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </ScrollView>
      ) : (
        <Text style={[globalStyles.typography.body]}>No image available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: globalStyles.colours.white,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: height,
    width: width,
    borderRadius: 10,
    marginHorizontal: 4,
  },
});

export default AppCarousel;
