import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="py-[40px] md:py-[80px] bg-primary-100">
      <div className="container flex flex-col lg:flex-row justify-between gap-[30px] lg:gap-0">
        <h2 className="max-w-[613px] text-28 md:text-36/[1.69] font-semibold text-white">
          Let's discuss making your interior like a dream place!
        </h2>
        <div className="max-w-[432px]">
          <p className="text-grayLight mb-[20px] leading-[1.61]">
            Contact us below to work together to build your amazing interior
          </p>
          <Link
            href="/contacts"
            className="inline-block text-[14px] font-medium bg-white hover:bg-primary-90 transition-all text-black-50 hover:text-white py-[14px] px-[32px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
