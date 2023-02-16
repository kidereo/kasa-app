import React, { Fragment } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../config/appStyles";
import AppFooter from "../components/partials/AppFooter";
import AppHeader from "../components/partials/AppHeader";
import AppTag from "../components/common/AppTag";
import AppRating from "../components/common/AppRating";
import AppDropdown from "../components/common/AppDropdown";
import AppCarousel from "../components/common/AppCarousel";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  const {
    pictures,
    title,
    rating,
    description,
    tags,
    equipments,
    host,
    location,
  } = listing;

  return (
    <ScrollView style={styles.container}>
      {/* <AppHeader /> */}
      <View style={styles.contentsContainer}>
        <AppCarousel images={pictures} />
        <Text style={[globalStyles.typography.title, styles.title]}>
          {title}
        </Text>
        <Text style={[globalStyles.typography.subTitle, styles.subTitle]}>
          {location}
        </Text>
        <View style={styles.tagsContainer}>
          {tags.map((element, index) => (
            <AppTag key={index} tag={element} />
          ))}
        </View>
        <View style={styles.infoContainer}>
          <AppRating rating={rating} />
          <View style={styles.hostContainer}>
            <Text
              style={[globalStyles.typography.body, styles.hostContainerText]}
            >
              {host.name}
            </Text>
            <Image
              style={styles.hostContainerImage}
              source={{ uri: host.picture }}
            />
          </View>
        </View>
        <View style={styles.dropdownsContainer}>
          <AppDropdown title="Description" content={description} />
          <AppDropdown
            title="Equipments"
            content={equipments.map((element, index) => (
              <Text key={index}>
                <MaterialCommunityIcons
                  name="checkbox-marked-outline"
                  size={20}
                />
                {element}
                {"\n"}
              </Text>
            ))}
          />
        </View>
      </View>
      <AppFooter />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  contentsContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  title: {
    paddingVertical: 10,
  },
  subTitle: {
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  infoContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hostContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  hostContainerImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: globalStyles.colours.medium,
  },
  hostContainerText: {
    width: 130,
    textAlign: "right",
    marginRight: 10,
    fontSize: 18,
  },
  dropdownsContainer: {
    marginVertical: 10,
    justifyContent: "space-evenly",
  },
});

export default ListingDetailsScreen;
