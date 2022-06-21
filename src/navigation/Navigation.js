import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
/* import Account from "../../screens/Account";
import PokeDex from "../../screens/PokeDex";
import Favorite from "../../screens/Favorite"; */
import FavoriteNavigation from "./FavoriteNavigation";
import PokeDexNavigation from "./PokeDexNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="PokeDex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PokeDex"
        component={PokeDexNavigation}
        options={{
          tabBarLabel:
            "" /* Lo dejamos vacio por que solo queremos mostrar el icono de la pokeball */,
          tabBarIcon: () => renderPokeBall(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
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
      source={require("../assets/pokeball.png")}
      style={{
        height: 65,
        width: 65,
        top: -15,
      }}
    />
  );
}
