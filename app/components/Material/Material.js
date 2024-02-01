import Image from "next/image";
import Title from "../Title/Title";
import Link from "next/link";

const Material = () => {
  return (
    <section className="pt-20 pb-[167px]">
      <div className="container flex flex-row">
        <div className="pt-[50px]">
          <Title
            name={"Material"}
            title={"Choice of materials for quality furniture"}
            titWidth="348px"
            subtitle={
              "You can custom the material as desired. And our furniture uses the best materials and selected quality materials."
            }
            subWidth="497px"
          />
          <Link
            href="/contacts"
            className="inline-block text-[14px] font-medium border-[1px] border-black-30 hover:bg-primary-90 transition-all text-black-50 hover:text-white py-[14px] px-[32px] mt-[23px]"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex flex-row">
          <Image
            src="/material1.jpg"
            width={342}
            height={392}
            alt="Parquet"
            className="relative top-[100px] right-[40px]"
          />
          <div>
            <Image
              src="/material2.jpg"
              width={241}
              height={225}
              alt="Tile"
              className="mb-10"
            />
            <Image
              src="/material3.jpg"
              width={195}
              height={178}
              alt="Stones"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Material;
