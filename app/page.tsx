import { usePokemon } from "@/hooks/usePokemon";
import { getAllPokemons } from "@/providers/pokemonsProvider";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  

  return (
    <>
      <h1>Home page</h1>
      <Link href="/about">About</Link>
    </>
  );
}
