import Hero from "../components/blocks/Hero/Hero";
import Location from "../components/blocks/Location/Location";
import Form from "../components/blocks/Form/Form";

export default function Contacts() {
  return (
    <>
      <Hero
        title="Contact Us"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
      <Form />
      <Location />
    </>
  );
}
