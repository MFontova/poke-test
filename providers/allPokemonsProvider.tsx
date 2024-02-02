import axios from "axios"

export const getAllPokemons =async () => {
  return await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  // return await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
}
