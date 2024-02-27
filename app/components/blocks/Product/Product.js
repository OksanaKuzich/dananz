import Image from "next/image";
import Title from "../../Title/Title";
import Link from "next/link";
import { productsData } from "./data";
import arrow from "../../../../public/arrow-right.svg";

const Product = () => {
  return (
    <section className="py-[40px] md:py-[80px]">
      <div className="container">
        <Title
          name="PRODUCT"
          title="Choose your product themes"
          titWidth="337px"
          subtitle="Find the theme you want. If our choice of theme is not what you want, you can customize it as you want."
          subWidth="lg:w-[473px]"
          direction="row"
        />
        <ul className="flex flex-col gap-[25px] md:gap-[43px] w-full text-black-50 bg-white text-24 md:text-32 font-semibold mt-[40px] md:mt-[73px]">
          {productsData.map(({ number, title, text, link }, idx) => (
            <li key={"prod" + idx}>
              <Link
                href={link}
                className="item flex flex-row justify-between items-start"
              >
                <div className="flex flex-row pr-[5px] md:pr-0">
                  <p className="mr-[30px] lg:mr-[80px]">{number}</p>
                  <div className="flex flex-col">
                    <p className="mb-[24px]">{title}</p>
                    <p className="text-18 font-normal max-w-[470px]">{text}</p>
                  </div>
                </div>
                <Image src={arrow} alt="Right arrow icon" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Product;
