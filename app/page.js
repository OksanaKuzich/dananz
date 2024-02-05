import Image from "next/image";
import MainHero from "./components/blocks/Hero/MainHero";
import About from "./components/blocks/About/About";
import Service from "./components/blocks/Service/Service";
import Product from "./components/blocks/Product/Product";
import Material from "./components/blocks/Material/Material";
import Banner from "./components/blocks/Banner/Banner";

export default function Home() {
  return (
    <>
      <MainHero />
      <About />
      <Service />
      <Product />
      <Material />
    </>
  );
}
