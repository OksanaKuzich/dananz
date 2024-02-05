import Title from "../../Title/Title";
import { serviceData, servicesListData } from "./data";

const ServicesList = () => {
  return (
    <section className="pt-[50px] pb-[100px]">
      <div className="container">
        <Title
          name="SERVICE"
          title="Why Choose Us"
          subtitle="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
          subWidth="471px"
        />
        <ul className="flex flex-row gap-[18px] justify-between mt-[40px]">
          {servicesListData.map(({ name, text, icon: Icon }, idx) => (
            <li
              key={"servlist" + idx}
              className="py-[30px] px-[27px] pb-[22px] text-center shadow-[0_0_5px_1px_rgba(0,0,0,0.10)] hover:shadow-[0_0_5px_3px_rgba(0,0,0,0.10)] transition-all"
            >
              <div className="flex justify-center items-center w-[63px] h-[63px] rounded-50 border-[2px] border-grayLight mb-[20px] mx-auto">
                <Icon className="w-[35px] h-[35px] text-primary-100" />
              </div>
              <p className="text-[24px]/[1.416] font-semibold text-black-50 mb-[20px]">
                {name}
              </p>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesList;
