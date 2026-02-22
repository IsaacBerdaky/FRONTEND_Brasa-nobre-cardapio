import Image from "next/image";
import Hero from "./components/hero";
import Cardapio from "./components/cardapio";

export default function Home() {
  return (
    <>
      <Hero />
      <Cardapio />
    </>
  );
}
