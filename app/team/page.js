import Hero from "../components/blocks/Hero/Hero";
import TeamList from "../components/blocks/TeamList/TeamList";
import ServicesList from "../components/blocks/Service/ServicesList";

export default function Team() {
  return (
    <>
      <Hero
        title="Our Team"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        image="/heroTeam.jpg"
        alt="Our Team section"
      />
      <TeamList />
      <ServicesList />
    </>
  );
}
