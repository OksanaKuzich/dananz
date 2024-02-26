import Link from "next/link";
import Title from "../../Title/Title";
import { locationData } from "./data";

const Location = () => {
  return (
    <section className="py-[40px] md:pt-[50px] md:pb-[170px]">
      <div className="container relative">
        <div>
          <Title
            name="Location"
            title="Visit Our Stores"
            subtitle="Find us at these locations"
          />
          <p className="text-[24px] font-semibold text-black-50 mt-[40px] mb-[10px]">
            Email
          </p>
          <Link href="mailto:dananz@gmail.com" target="blank">
            dananz@gmail.com
          </Link>
          <p className="text-[24px] font-semibold text-black-50 mt-[33px] mb-[10px]">
            Phone
          </p>
          <Link href="tel:+628150021000" target="blank">
            +62 815 002 1000
          </Link>
        </div>
        <div className="xl:absolute top-[32px] left-[592px] max-w-[728px] mt-[40px] xl:mt-0">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-[60px] gap-y-[40px] relative xl:top-[32px] xl:left-[-50px]">
            {locationData.map(({ city, text }, idx) => (
              <li key={"loc" + idx}>
                <p className="text-[24px] font-semibold text-black-50 mb-[30px]">
                  {city}
                </p>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Location;
