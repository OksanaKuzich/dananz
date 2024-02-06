import Content from "../../components/blocks/Content/Content";
import Hero from "../../components/blocks/Hero/Hero";
import Gallery from "../../components/blocks/Gallery/Gallery";
import { galleryDataModern } from "@/app/components/blocks/Gallery/data";

export default function Modern() {
  return (
    <>
      <Hero
        title="Modern Room"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        image="/heroModern.jpg"
        alt="Minimalist room section"
      />
      <Content />
      <Gallery data={galleryDataModern} />
    </>
  );
}
