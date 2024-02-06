import Content from "../../components/blocks/Content/Content";
import Hero from "../../components/blocks/Hero/Hero";
import Gallery from "../../components/blocks/Gallery/Gallery";
import { galleryDataTransitional } from "@/app/components/blocks/Gallery/data";

export default function Transitional() {
  return (
    <>
      <Hero
        title="Transitional Room"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        image="/heroTransitional.jpg"
        alt="Minimalist room section"
      />
      <Content />
      <Gallery data={galleryDataTransitional} />
    </>
  );
}
