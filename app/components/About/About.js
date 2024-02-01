import Image from "next/image";
import Title from "../Title/Title";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-20">
      <div className="container relative">
        <Title
          name={"About"}
          title={
            "“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency”"
          }
        />
        <div className="relative flex flex-row gap-[94px] justify-between items-end mt-[60px]">
          <Image
            src="/about.jpg"
            width={883}
            height={525}
            alt="Kitchen and dining room interior"
          />
          <div className="pb-[94px]">
            <p className="mb-[40px]">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere.
            </p>
            <Link
              href="/about"
              className="inline-block text-[14px] font-medium bg-primary-100 hover:bg-primary-90 transition-all text-white py-[14px] px-[32px]"
            >
              Learn More
            </Link>
          </div>
          <div className="absolute top-[27px] right-[116px] flex flex-row gap-[20px] items-center w-[276px] h-[90px] bg-white py-[17px] px-5 drop-shadow-[10px_10px_40px_rgba(0,0,0,0.05)]">
            <Image
              src="/person.png"
              width={51}
              height={56}
              alt="Arga Danaan"
              className="rounded-50"
            />
            <div>
              <p className="font-semibold text-black-100">Arga Danaan</p>
              <p>CEO of Dananz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
