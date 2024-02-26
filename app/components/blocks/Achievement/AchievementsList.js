import Image from "next/image";
import Link from "next/link";
import Title from "../../Title/Title";
import Table from "../../Table/Table";
import { achievementData } from "./data";

const AchievementList = () => {
  return (
    <section className="py-[40px] md:py-[50px]">
      <div className="container">
        <Title name="ACHIEVEMENT" />
        <ul className="flex flex-col gap-[40px] mt-[20px]">
          {achievementData.map(({ title, text, image, alt }, idx) => (
            <li
              key={"achive" + idx}
              className="flex flex-col-reverse xl:flex-row gap-[30px] xl:gap-[120px] items-center"
            >
              <Image src={image} alt={alt} />
              <div>
                <p className="text-24/[1.416] font-semibold text-black-50 mb-[20px]">
                  {title}
                </p>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AchievementList;
