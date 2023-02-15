import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Text,
} from "react-native";

import globalStyles from "../../config/appStyles";

function AppCarousel({ images }) {
  return (
    <View style={styles.container}>
      {images && images.length ? (
        <ScrollView
          horizontal={true}
          nestedScrollEnabled
          pagingEnabled
          showsHorizontalScrollIndicator={true}
        >
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </ScrollView>
      ) : (
        // <FlatList
        //   data={images}
        //   horizontal
        //   renderItem={({ item, index }) => (
        //     <View style={styles.container}>
        //       <Image key={index} source={{ uri: item }} style={styles.image} />
        //     </View>
        //   )}
        // />
        <Text style={[globalStyles.typography.body]}>No image available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 255,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: globalStyles.colours.light,
  },
  image: { height: 255, width: 355, borderRadius: 10 },
});

export default AppCarousel;
