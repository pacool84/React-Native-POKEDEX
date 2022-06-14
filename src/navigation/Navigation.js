import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Account from "../../screens/Account";
import PokeDex from "../../screens/PokeDex";
import Favorite from "../../screens/Favorite";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PokeDex"
        component={PokeDex}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;

function renderPokeBall() {
  return (
    <Image
      source={require("../navigation/assets/pokeball.png")}
      style={{
        height: 65,
        width: 65,
        top: -15,
      }}
    />
  );
}
