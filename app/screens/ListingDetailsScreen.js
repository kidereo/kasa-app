import React, { Fragment } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

import globalStyles from "../config/appStyles";
import AppFooter from "../components/partials/AppFooter";
import AppHeader from "../components/partials/AppHeader";
import AppTag from "../components/common/AppTag";
import AppRating from "../components/common/AppRating";
import AppDropdown from "../components/common/AppDropdown";

const title = "Appartement cosy";
const rating = "4";
const location = "Ile de France - Paris 17e";
const cover =
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg";
const description =
  "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.";
const tags = ["Canal Saint Martin", "République", "Appartement"];
const equipments = [
  "Parking",
  "Sèche Cheveux",
  "Machine à laver",
  "Wi-fi",
  "Cuisine équipée",
  "Télévision",
];
const host = {
  name: "Nathalie Jean",
  picture:
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
};

function ListingDetailsScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <AppHeader />
      <View style={styles.contents}>
        <Image style={styles.image} source={{ uri: cover }} />
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
  contents: {
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: 255,
    borderRadius: 10,
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
