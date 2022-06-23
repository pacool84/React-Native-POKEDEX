import React, { useState, useEffect } from "react";
import { Text, SafeAreaView } from "react-native";

const PokeDex = () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

  const fetchPokemons = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <SafeAreaView>
      <Text>Hello my friend Poke Dex page</Text>
    </SafeAreaView>
  );
};

export default PokeDex;
