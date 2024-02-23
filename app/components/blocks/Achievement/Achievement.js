import Image from "next/image";
import Link from "next/link";
import Title from "../../Title/Title";
import Table from "../../Table/Table";
import achivImg from "../../../../public/achievement.jpg";

const Achievement = () => {
  return (
    <section className="py-[40px] md:py-[50px]">
      <div className="container">
        <Title
          name="ACHIEVEMENT"
          title="interior customization with Danaanz, best quality with professional workers"
          titWidth="lg:w-[738px]"
        />
        <div className="relative flex flex-row justify-between mt-[40px] md:mt-[86px]">
          <Image
            src={achivImg}
            alt="The interior of the dining room with a view of the sea"
          />
          <div className="absolute xl:relative right-0 top-2/4 -translate-y-2/4 xl:translate-y-0">
            <Table />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
