import Image from "next/image";

const Gallery = ({ data }) => {
  return (
    <section className="pt-[50px] pb-[100px]">
      <div className="container">
        <ul className="grid grid-cols-2 gap-[32px]">
          {data &&
            data.map(({ src, alt }, idx) => (
              <li
                key={"gallery" + idx}
                className={idx == 2 ? "col-span-2" : ""}
              >
                <Image src={src} alt={alt} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
