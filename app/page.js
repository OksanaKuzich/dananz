import Image from "next/image";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Product from "./components/Product/Product";
import Material from "./components/Material/Material";
import Banner from "./components/Banner/Banner";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Product />
      <Material />
      <Banner />
    </>
  );
}
