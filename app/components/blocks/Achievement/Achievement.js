import Image from "next/image";
import Link from "next/link";
import Title from "../../Title/Title";
import Table from "../../Table/Table";
import achivImg from "../../../../public/achievement.jpg";

const Achievement = () => {
  return (
    <section className="py-[50px]">
      <div className="container">
        <Title
          name="ACHIEVEMENT"
          title="interior customization with Danaanz, best quality with professional workers"
          titWidth="738px"
        />
        <div className="flex flex-row justify-between mt-[86px]">
          <Image
            src={achivImg}
            alt="The interior of the dining room with a view of the sea"
          />
          <Table />
        </div>
      </div>
    </section>
  );
};

export default Achievement;
