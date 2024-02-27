import Image from "next/image";
import Title from "../../Title/Title";
import Link from "next/link";
import Card from "../../Card/Card";
import aboutImg from "../../../../public/about.jpg";

const About = () => {
  return (
    <section className="py-[40px] md:py-[80px]">
      <div className="container relative">
        <Title
          name="About"
          title="“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”"
        />
        <Card
          image={aboutImg}
          text="Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere."
          person="/person.png"
          personName="Arga Danaan"
          personRole="CEO of Dananz"
          marginTop="xl:mt-[60px]"
        />
      </div>
    </section>
  );
};

export default About;
