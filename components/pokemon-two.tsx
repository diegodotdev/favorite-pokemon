import { fetchPokemon } from "@/lib/requests";
import type { Pokemon } from "@/types";
import PokemonDetails from "./pokemon-details";

export default async function PokemonTwo({ idx }: { idx: number }) {
  const data: Pokemon = await fetchPokemon(idx);

  return (
    <PokemonDetails
      name={data?.species?.name}
      image={data?.sprites?.front_default}
    />
  );
}
