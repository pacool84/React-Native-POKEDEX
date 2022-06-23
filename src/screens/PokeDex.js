import React, { useState, useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import { getPokemonApi } from "../API/pokemonData";

const PokeDex = () => {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Hello my friend Poke Dex page</Text>
    </SafeAreaView>
  );
};

export default PokeDex;
