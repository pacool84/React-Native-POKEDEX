import { API_HOST } from "../utils/constants";

export async function getPokemonApi() {
  try {
    const URL = `${API_HOST}/pokemon`;
    const response = await fetch(URL);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
