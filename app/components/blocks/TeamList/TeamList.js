import Image from "next/image";
import Title from "../../Title/Title";
import { teamData } from "./data";

const TeamList = () => {
  return (
    <section className="py-[50px]">
      <div className="container">
        <Title
          name="Designer"
          title="Creative Person"
          subtitle="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
          subWidth="471px"
        />
        <ul className="grid grid-cols-4 gap-[24px] mt-[80px]">
          {teamData.map(({ name, position, image }, idx) => (
            <li
              key={"team" + idx}
              className="relative flex justify-end w-[282px] h-[400px] bg-primary-100"
            >
              <Image src={image} width={282} height={386} alt={name} />
              <div className="absolute bottom-[12px] left-[12px] bg-white py-[18px] px-[16px] w-[258px] h-[96px]">
                <p className="text-[24px]/[1.416] font-semibold text-black-50">
                  {name}
                </p>
                <p>{position}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamList;
