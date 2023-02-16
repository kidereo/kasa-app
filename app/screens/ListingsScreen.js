import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppCard from "../components/partials/AppCard";

import listings from "../data/data.json";

function ListingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            image={item.cover}
            rating={item.rating}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default ListingsScreen;
