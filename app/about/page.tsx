import { getAllPokemons } from "@/providers/allPokemonsProvider"

type Pokemon = {
  name: string;
  url: string;
}

export default async function About() {
  const pokemon = await getAllPokemons()

  console.log(pokemon.data)
  return (
    <div>
      <h1>About PokeTest</h1>
      {
        pokemon.data.results.map((poke : Pokemon) => <p key={poke.name}>{poke.name} - {poke.url} </p>)
      }
    </div>
  )
}