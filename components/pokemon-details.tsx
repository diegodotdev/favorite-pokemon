"use client";

import { Pokemon } from "@/types";
import Image from "next/image";
import { makeVote } from "@/lib/requests";

export default function PokemonDetails({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <div
      className="md:w-[250px] md:h-[250px] rounded-full flex flex-col gap-2 items-center justify-center cursor-pointer group"
      onClick={() => {
        makeVote({
          name: name,
          image: image,
        }).then(() => {
          window.location.reload();
        });
      }}
    >
      <p className="capitalize group-hover:text-pink-400 font-[600]">{name}</p>
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
      />
    </div>
  );
}
