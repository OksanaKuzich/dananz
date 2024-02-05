import CardList from "../components/blocks/CardList/CardList";
import Hero from "../components/blocks/Hero/Hero";
import ServicesList from "../components/blocks/Service/ServicesList";

export default function Portfolio() {
  return (
    <>
      <Hero
        title="Portfolio"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        image="/hero.jpg"
        alt="Portfolio section"
      />
      <CardList />
      <ServicesList />
    </>
  );
}
