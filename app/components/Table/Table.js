import { heroData } from "./data";

const Table = () => {
  return (
    <ul className="flex flex-col justify-center items-center text-center gap-[20px] md:gap-[35px] lg:gap-[57px] px-[20px] lg:px-[48px] py-[25px] lg:py-[40px] bg-primary-100 text-16 text-white">
      {heroData.map(({ number, text }, idx) => (
        <li key={"table" + idx}>
          <p className="text-20 md:text-28 lg:text-48 xl:text-52">{number}</p>
          <p className="text-12 md:text-14 lg:text-18">{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Table;
