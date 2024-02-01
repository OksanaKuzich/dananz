import { heroData } from "./data";

const Table = () => {
  return (
    <div className="w-[252px] flex flex-col justify-center items-center text-center gap-[57px] h-[525px] bg-primary-100 text-[16px] text-white">
      {heroData.map(({ number, text }, idx) => (
        <div key={idx}>
          <p className="text-[52px]">{number}</p>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Table;
