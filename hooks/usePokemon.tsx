import { getAllPokemons } from "@/providers/allPokemonsProvider"
import { useState } from "react"

export const usePokemon = () => {
  async function fetch() {
    await getAllPokemons().then(response => {
      return response.data
    })
  }

  return {fetch}
}