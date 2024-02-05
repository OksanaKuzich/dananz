import Image from "next/image";
import Link from "next/link";

const Card = ({
  image,
  title = false,
  text,
  person,
  personName,
  personRole,
  positionImage = "left",
  marginTop,
  link = "/about",
}) => {
  return (
    <div
      className="relative flex flex-row gap-[94px] justify-between items-end"
      style={{
        flexDirection: positionImage === "right" ? "row-reverse" : "row",
        marginTop: marginTop ? marginTop : "20px",
      }}
    >
      <Image
        src={image}
        width={883}
        height={525}
        alt="Kitchen and dining room interior"
      />
      <div className="pb-[94px]">
        {title && (
          <p className="text-[24px] font-semibold text-black-50 mb-[20px]">
            {title}
          </p>
        )}
        <p className="mb-[40px]">{text}</p>
        <Link
          href={link}
          className="inline-block text-[14px] font-medium bg-primary-100 hover:bg-primary-90 transition-all text-white py-[14px] px-[32px]"
        >
          Learn More
        </Link>
      </div>
      <div
        className="absolute top-[27px] right-[116px] flex flex-row gap-[20px] items-center w-[276px] h-[90px] bg-white py-[17px] px-5 drop-shadow-[10px_10px_40px_rgba(0,0,0,0.05)]"
        style={positionImage === "right" ? { left: "121px" } : {}}
      >
        <Image
          src={person}
          width={51}
          height={56}
          alt={personName}
          className="rounded-50"
        />
        <div>
          <p className="font-semibold text-black-100">{personName}</p>
          <p>{personRole}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
