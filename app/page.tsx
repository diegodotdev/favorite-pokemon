import { PokemonOne, PokemonTwo } from "@/components";

export default function Home() {
  let num1 = Math.floor(Math.random() * 1000);
  let num2 = Math.floor(Math.random() * 1000);
  let same = false;

  if (num1 === num2) {
    num2 += 1;
    same = true;
  }
  return (
    <main className="w-full h-[88vh] flex justify-center items-center flex-col gap-10 md:gap-4">
      <p className="font-[600] md:text-3xl text-center">
        Which pokemon do you like more?
      </p>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center h-[300px]">
        <PokemonOne idx={num1} />
        <p>or</p>
        <PokemonTwo idx={num2} />
      </div>
    </main>
  );
}
