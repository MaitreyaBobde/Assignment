import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "./AppText";
import LaunchCardsList from "./LaunchCardsList";
import colors from "../config/colors";

function launchpads({ name, details, status, launchIds, imageUrl }) {
  launchIds = launchIds.splice(0, 3);
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <AppText style={styles.name}>{name}</AppText>
      <AppText style={styles.details}>{details}</AppText>
      <AppText style={styles.status}>{"Status: " + status}</AppText>
      <LaunchCardsList launchIds={launchIds} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  name: {
    paddingHorizontal: 30,
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  details: {
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  status: {
    paddingHorizontal: 30,
    paddingTop: 10,
  },
});

export default launchpads;
