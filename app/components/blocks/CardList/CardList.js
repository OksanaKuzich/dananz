import Title from "../../Title/Title";
import Card from "../../Card/Card";
import { cardsData } from "./data";

const CardList = () => {
  return (
    <section className="py-[40px] md:py-[50px]">
      <div className="container">
        <Title name={"Portfolio"} />
        <ul className="flex flex-col gap-[40px]">
          {cardsData.map(
            (
              {
                img,
                title,
                text,
                person,
                personName,
                personRole,
                link,
                positionImage,
              },
              idx
            ) => (
              <li key={"portf" + idx}>
                <Card
                  image={img}
                  title={title}
                  text={text}
                  person={person}
                  personName={personName}
                  personRole={personRole}
                  link={link}
                  positionImage={positionImage}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default CardList;
