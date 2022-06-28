import React from "react";
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";

const PokemonCard = (props) => {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log(
      `Yo te elijo ${pokemon.name.toUpperCase()} que es del tipo ${pokemon.type.toUpperCase()} `
    );
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Text style={styles.order}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
            <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    backgroundColor: "gray",
  },
  order: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    left: 2.5,
  },

  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 100,
    height: 100,
  },
});
