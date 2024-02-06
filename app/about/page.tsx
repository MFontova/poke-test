import { PokemonCard } from "@/components/PokemonCard";
import { getAllPokemons } from "@/providers/pokemonsProvider"
import { Suspense } from "react";

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
      <section className="grid grid-cols-3 m-auto gap-20 justify-around">
        {
          pokemon.map((poke : Pokemon) => <Suspense key={poke.name} fallback={<p>Loading each pokemon</p>}> <PokemonCard key={poke.name} url={poke.url} /> </Suspense>)
        }
      </section>
    </div>
  )
}