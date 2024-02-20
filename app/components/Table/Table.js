import { heroData } from "./data";

const Table = () => {
  return (
    <ul className="w-[252px] flex flex-col justify-center items-center text-center gap-[57px] px-[48px] py-[40px] bg-primary-100 text-16 text-white">
      {heroData.map(({ number, text }, idx) => (
        <li key={"table" + idx}>
          <p className="text-28 lg:text-48 xl:text-52">{number}</p>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Table;
