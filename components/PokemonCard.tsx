'use client'

import { getOnePokemon } from "@/providers/pokemonsProvider"
import { Pokemon } from "@/types/pokemon"
import Image from "next/image"
import { useState } from "react"

export const PokemonCard = async ({url}: {url: string}) => {
  const [pokeTeam, setPokeTeam] = useState<Pokemon[]>([])

  const addPokeToTeam = (pokemon: Pokemon) => {
    setPokeTeam([...pokeTeam, pokemon])
    console.log('team: ', pokeTeam)
  }
  const pokemon: Pokemon = await getOnePokemon({url})
  return (
    <div className="flex flex-col items-center">
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
      <p>{pokemon.name} - {pokemon.id}</p>
      <button 
        className="border rounded-sm border-white p-1 hover:bg-gray-800" 
        onClick={() => addPokeToTeam(pokemon)}
      >
        Add to team
      </button>
    </div>
  )
}