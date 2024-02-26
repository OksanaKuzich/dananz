import Image from "next/image";
import Title from "../../Title/Title";
import Link from "next/link";
import { serviceData } from "./data";
import arrowRight from "../../../../public/arrow-right.svg";
import servImg from "../../../../public/service.jpg";

const Service = () => {
  return (
    <section className="py-[40px] md:py-[80px] reveal">
      <div className="container">
        <Title
          name="SERVICE"
          title="Attractive furniture with the best quality"
          subtitle="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
          subWidth="lg:w-[471px]"
        />
        <div className="relative mt-[40px] xl:mt-0">
          <ul className="lg:absolute top-[-15px] xl:top-[-50px] left-0 flex flex-col gap-[36px] w-full  lg:w-[600px] xl:w-[883px] text-black-50 font-semibold bg-white lg:pr-10 pb-10">
            {serviceData.map(({ number, text }, idx) => (
              <li key={"serv" + idx}>
                <Link
                  href="/services"
                  className="item flex flex-row justify-between items-center"
                >
                  <div className="flex flex-row">
                    <p className="mr-[40px]">{number}</p>
                    <p className="">{text}</p>
                  </div>
                  <Image src={arrowRight} alt="Right arrow icon" />
                </Link>
              </li>
            ))}
          </ul>
          <Image
            src={servImg}
            alt="The interior of the guest room"
            className="lg:pl-[50px] xl:pl-0 xl:mt-[88px] xl:ml-[124px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
