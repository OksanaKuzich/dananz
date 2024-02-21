import Image from "next/image";
import { heroData } from "../../Table/data";
import Table from "../../Table/Table";

const MainHero = () => {
  let year = new Date().getFullYear();

  return (
    <section className="pt-[58px] pb-[40px] md:pb-[80px]">
      <div className="container relative">
        <div className="relative mb-[46px]">
          <h1 className="text-36 lg:text-60 xl:text-72/[1.402] font-bold text-black-50 max-w-[680px]">
            Design your interor with high quality
          </h1>
          <div
            className=" hidden md:absolute bottom-0 right-0 text-18 font-medium text-black-50 rotate-[180deg]"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            <p className="text-14 xl:text-18">{year}</p>
            <p className="text-14 xl:text-18">ALL RIGHT RESERVED</p>
          </div>
        </div>
        <Image
          src="/hero.jpg"
          width={1200}
          height={513}
          alt="Kitchen interior"
        />
        <div className="absolute top-[120px] md:top-[80px] lg:top-[50px] right-[50px] xl:right-[120px] w-[380px] md:w-[500px] lg:w-[250px] xl:w-[683px] h-[2px] bg-black-100"></div>
        <div className="absolute top-[140px] right-[60px] md:right-[100px] xl:right-[262px]">
          <Table />
        </div>
      </div>
    </section>
  );
};

export default MainHero;
