import Image from "next/image";
import Title from "../Title/Title";
import Link from "next/link";
import { serviceData } from "./data";

const Service = () => {
  return (
    <section className="py-20">
      <div className="container">
        <Title
          name={"SERVICE"}
          title={"Attractive furniture with the best quality"}
          subtitle={
            "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
          }
          subWidth="471px"
        />
        <div className="relative">
          <div className="absolute top-[-50px] left-0 flex flex-col gap-[36px] w-[883px] text-black-50 font-semibold bg-white pr-10 pb-10">
            {serviceData.map(({ number, text }, idx) => (
              <Link
                key={idx}
                href="/services"
                className="item flex flex-row justify-between items-center"
              >
                <div className="flex flex-row">
                  <p className="mr-[40px]">{number}</p>
                  <p className="">{text}</p>
                </div>
                <Image
                  src="/arrow-right.svg"
                  width={32}
                  height={32}
                  alt="Right arrow icon"
                  className=""
                />
              </Link>
            ))}
          </div>
          <Image
            src="/service.jpg"
            width={1076}
            height={524}
            alt="The interior of the guest room"
            className="mt-[88px] ml-[124px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
