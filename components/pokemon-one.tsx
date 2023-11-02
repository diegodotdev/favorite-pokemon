import { fetchPokemon, makeVote } from "@/lib/requests";
import type { Pokemon } from "@/types";
import PokemonDetails from "./pokemon-details";

export default async function PokemonOne({ idx }: { idx: number }) {
  const data: Pokemon = await fetchPokemon(idx);

  return (
    <PokemonDetails
      name={data?.species?.name}
      image={data?.sprites?.front_default}
    />
  );
}
