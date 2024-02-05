import AchievementList from "../components/blocks/Achievement/AchievementsList";
import Hero from "../components/blocks/Hero/Hero";
import Product from "../components/blocks/Product/Product";

export default function Services() {
  return (
    <>
      <Hero
        title="Services"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        image="/heroServices.jpg"
        alt="Services section"
      />
      <AchievementList />
      <Product />
    </>
  );
}
