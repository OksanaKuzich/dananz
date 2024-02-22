const Title = ({
  name,
  title = false,
  titWidth = "100%",
  subtitle = false,
  subWidth = "100%",
  direction = "col",
}) => {
  return (
    <div>
      <div className="flex flex-row gap-[17px] items-center mb-[20px]">
        <p className="text-16 font-medium text-black-100 uppercase">{name}</p>
        <div className="w-[530px] h-[2px] bg-black-100"></div>
      </div>
      <div
        className={`flex ${(direction = "row"
          ? "flex-col lg:flex-" + direction
          : direction)}`}
        style={{
          justifyContent: (direction = "row" ? "space-between" : "flex-start"),
        }}
      >
        {title && (
          <h2
            className="text-28 md:text-36 font-semibold text-black-50"
            style={{ width: titWidth }}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p
            className={`mt-[24px] ${subWidth ? "w-full " + subWidth : "100%"}`}
            // style={{ width: subWidth }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Title;
