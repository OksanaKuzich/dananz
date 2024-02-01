import Image from "next/image";
import { heroData } from "../Table/data";
import Table from "../Table/Table";

const Hero = () => {
  return (
    <section className="pt-[58px] pb-20">
      <div className="container relative">
        <div className="relative mb-[46px]">
          <h1 className="text-[72px] font-bold text-black-50 w-[680px]">
            Design your interor with high quality
          </h1>
          <div
            className="absolute bottom-0 right-0 text-[18px] font-medium text-black-50 rotate-[180deg]"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            <p>2022</p>
            <p>ALL RIGHT RESERVED</p>
          </div>
        </div>
        <Image
          src="/hero.jpg"
          width={1200}
          height={513}
          alt="Kitchen interior"
        />
        <div className="absolute top-[50px] right-[120px] w-[683px] h-[2px] bg-black-100"></div>
        <div className="absolute top-[140px] right-[262px]">
          <Table />
        </div>
      </div>
    </section>
  );
};

export default Hero;
