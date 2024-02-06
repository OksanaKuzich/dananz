import Image from "next/image";
import Title from "../../Title/Title";
import Link from "next/link";
import material1 from "../../../../public/material1.jpg";
import material2 from "../../../../public/material2.jpg";
import material3 from "../../../../public/material3.jpg";

const Material = () => {
  return (
    <section className="pt-[80px] pb-[167px]">
      <div className="container flex flex-row">
        <div className="pt-[50px]">
          <Title
            name="Material"
            title="Choice of materials for quality furniture"
            titWidth="348px"
            subtitle="You can custom the material as desired. And our furniture uses the best materials and selected quality materials."
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
            src={material1}
            alt="Parquet"
            className="relative top-[100px] right-[40px]"
          />
          <div>
            <Image src={material2} alt="Tile" className="mb-10" />
            <Image src={material3} alt="Stones" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Material;
