import Content from "../../components/blocks/Content/Content";
import Hero from "../../components/blocks/Hero/Hero";
import Gallery from "../../components/blocks/Gallery/Gallery";

export default function Minimalist() {
  return (
    <>
      <Hero
        title="Minimalist Room"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        image="/heroMinimalist.jpg"
        alt="Minimalist room section"
      />
      <Content />
      <Gallery />
    </>
  );
}
