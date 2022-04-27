import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import LaunchpadsNavigator from "./app/navigation/LaunchpadsNavigatior";

export default function App() {
  return (
    <NavigationContainer>
      <LaunchpadsNavigator />
    </NavigationContainer>
  );
}