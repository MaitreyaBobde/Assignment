import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function LaunchCards({ name, imageUrl, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <AppText style={styles.name}>{name}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: colors.light,
    marginBottom: 20,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 100,
  },
  name: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default LaunchCards;
