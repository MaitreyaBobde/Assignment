import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import LaunchpadsCard from "../components/LaunchpadsCard";
import colors from "../config/colors";
import launchpadsApi from "../api/launchpads";

function LaunchpadsScreen(props) {
  const [launchpads, setLaunchpads] = useState([]);
  useEffect(() => {
    loadLaunchpads();
  }, []);
  const loadLaunchpads = async () => {
    const response = await launchpadsApi.getLaunchpadsApi();
    setLaunchpads(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={launchpads}
        keyExtractor={(launchpad) => launchpad.id.toString()}
        renderItem={({ item }) => (
          <LaunchpadsCard
            name={item.full_name + " (" + item.name + ")"}
            details={item.details}
            status={item.status}
            imageUrl={item.images.large[0]}
            launchIds={item.launches}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default LaunchpadsScreen;
