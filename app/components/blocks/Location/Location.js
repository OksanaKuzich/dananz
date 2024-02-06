import Link from "next/link";
import Title from "../../Title/Title";
import { locationData } from "./data";

const Location = () => {
  return (
    <section className="pt-[50px] pb-[170px]">
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
        <div className="absolute top-[32px] left-[592px] w-[728px]">
          <ul className="grid grid-cols-2 gap-x-[60px] gap-y-[40px] relative top-[32px] left-[-50px]">
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
