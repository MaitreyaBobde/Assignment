import React from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";

function LaunchScreen({ route }) {
  const launch = route.params;
  return (
    <Screen style={styles.screen}>
      <View style={styles.card}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: launch.links.patch.large }}
            />
            <AppText style={styles.name}>{launch.name}</AppText>
          </View>
          <AppText style={styles.details}>{launch.details}</AppText>
          <AppText style={styles.date}>
            {"Date Launched:  " + launch.date_utc.slice(0, 10)}
          </AppText>
          <AppText style={styles.reused}>
            {""}
            {launch.fairings != null &&
              "Reused: " + launch.fairings.reused}{" "}
          </AppText>
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  imageContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "center",
  },
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
  },
  details: {
    padding: 10,
  },
  date: {
    padding: 10,
  },
  reused: {
    padding: 10,
  },
});

export default LaunchScreen;
