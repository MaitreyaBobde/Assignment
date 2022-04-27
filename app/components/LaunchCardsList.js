import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppText from "./AppText";
import LaunchCard from "./LaunchCard";
import launchApi from "../api/launch";
import colors from "../config/colors";

const nolaunchMessage = () => {
  return (
    <View style={styles.card}>
      <AppText style={styles.nolaunch}>{"No Launches Available"}</AppText>
    </View>
  );
};

function LaunchCardsList({ launchIds }) {
  const [launchs, setLauchs] = useState([]);
  useEffect(() => {
    loadLaunchs(launchIds);
  }, []);
  const loadLaunchs = async (ids) => {
    let temp = [];
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      const response = await launchApi.getLaunchApi(id);
      temp.push(response.data);
    }
    setLauchs(temp);
  };
  const navigation = useNavigation();

  return (
    <View style={styles.launchlist}>
      <FlatList
        data={launchs}
        keyExtractor={(launch) => launch.id.toString()}
        ListEmptyComponent={nolaunchMessage}
        renderItem={({ item }) => (
          <LaunchCard
            name={item.name}
            imageUrl={item.links.patch.small}
            onPress={() => navigation.navigate("LaunchDetails", item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  nolaunch: {
    textAlign: "center",
    paddingLeft: 15,
    fontSize: 15,
  },
  launchlist: {
    padding: 15,
  },
  card: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.light,
    marginBottom: 10,
    overflow: "hidden",
    alignItems: "center",
  },
});

export default LaunchCardsList;
