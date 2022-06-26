import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

const PokemonList = (props) => {
  const { pokemons } = props;
  return (
    <FlatList
      data={pokemons}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
