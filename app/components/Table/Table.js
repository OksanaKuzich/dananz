import { heroData } from "./data";

const Table = () => {
  return (
    <ul className="w-[252px] flex flex-col justify-center items-center text-center gap-[57px] h-[525px] bg-primary-100 text-[16px] text-white">
      {heroData.map(({ number, text }, idx) => (
        <li key={"table" + idx}>
          <p className="text-[52px]">{number}</p>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Table;
