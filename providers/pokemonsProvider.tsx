import axios from "axios"
import { Pokemon, Convert } from "@/types/pokemon"

export const getAllPokemons = async () => {
  const response = await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')).json()
  return response.results
}

export const getOnePokemon = async ({url}: {url:string}) => {
  const response = await (await fetch(url)).json()
  return response
}