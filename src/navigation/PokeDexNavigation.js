import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokeDex from "../../screens/PokeDex";

const Stack = createStackNavigator();

const PokeDexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PokeDex" component={PokeDex} />
    </Stack.Navigator>
  );
};

export default PokeDexNavigation;
