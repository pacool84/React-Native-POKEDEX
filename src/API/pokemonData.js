import { API_HOST } from "../utils/constants";

export async function getPokemonApi() {
  try {
    const URL = `${API_HOST}/pokemon?limit=10&offset=0`;
    const response = await fetch(URL);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrl(URL) {
  try {
    const response = await fetch(URL);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
