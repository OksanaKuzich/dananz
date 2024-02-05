import Achievement from "../components/blocks/Achievement/Achievement";
import Hero from "../components/blocks/Hero/Hero";
import ServicesList from "../components/blocks/Service/ServicesList";

export default function About() {
  return (
    <>
      <Hero
        title="About"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        image="/heroAbout.jpg"
        alt="About us section"
      />
      <Achievement />
      <ServicesList />
    </>
  );
}
