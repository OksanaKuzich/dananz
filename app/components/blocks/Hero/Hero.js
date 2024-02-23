import Image from "next/image";
import Table from "../../Table/Table";

const Hero = ({ title, text, image = false, alt = false }) => {
  return (
    <section className="py-[40px] md:pt-[58px] md:pb-[50px]">
      <div className="container">
        <h1 className="text-32 md:text-56/[1.393] font-bold text-black-100 text-center mb-[36px]">
          {title}
        </h1>
        <p className="text-black-100 leading-[1.611] max-w-[520px] mx-auto text-center">
          {text}
        </p>
        {image && alt && (
          <Image
            src={image}
            width={1200}
            height={513}
            alt={alt}
            className="mt-[30px] md:mt-[86px]"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
