import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LaunchpadsScreen from "../screens/LaunchpadsScreen";
import LaunchScreen from "../screens/LaunchScreen";

const Stack = createNativeStackNavigator();

function LaunchpadsNavigatior(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Launch Pads" component={LaunchpadsScreen} />
      <Stack.Screen name="LaunchDetails" component={LaunchScreen} />
    </Stack.Navigator>
  );
}

export default LaunchpadsNavigatior;
