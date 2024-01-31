import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-[58px] pb-[80px]">
      <div className="container relative">
        <div className="pb-[46px] relative">
          <h1 className="text-[72px] font-bold text-black-50 w-[680px]">
            Design your interor with high quality.
          </h1>
          <div className="font-[18px] font-medium text-black-50">
            <p>2022</p>
            <p>ALL RIGHT RESERVED</p>
          </div>
        </div>
        <Image src="/hero.jpg" width={1200} height={513} alt="Hero page" />
        <div className="absolute top-[50px] right-[120px] w-[683px] h-[2px] bg-black-100"></div>
      </div>
    </section>
  );
};

export default Hero;
