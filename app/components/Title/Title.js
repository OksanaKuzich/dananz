const Title = ({
  name,
  title = false,
  titWidth = "100%",
  subtitle = false,
  subWidth = "100%",
  direction = "column",
}) => {
  return (
    <div>
      <div className="flex flex-row gap-[17px] items-center mb-[20px]">
        <p className="text-[16px] font-medium text-black-100 uppercase">
          {name}
        </p>
        <div className="w-[530px] h-[2px] bg-black-100"></div>
      </div>
      <div
        className="flex"
        style={{
          flexDirection: direction,
          justifyContent: (direction = "row" ? "space-between" : "flex-start"),
        }}
      >
        {title && (
          <h2
            className="text-[36px] font-semibold text-black-50"
            style={{ width: titWidth }}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-[24px]" style={{ width: subWidth }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Title;
