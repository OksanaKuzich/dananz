import Link from "next/link";
import Image from "next/image";

const footerData = [
  {
    name: "Facebook",
    icon: "/facebook.svg",
    href: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: "/instagram.svg",
    href: "https://www.instagram.com/",
  },
  {
    name: "TikTok",
    icon: "/tiktok.svg",
    href: "https://www.tiktok.com/",
  },
  {
    name: "YouTube",
    icon: "/youtube.svg",
    href: "https://www.youtube.com/",
  },
];

const Footer = () => {
  return (
    <footer className="py-[80px]">
      <div className="container flex flex-row justify-between">
        <div>
          <Link href="/">
            <Image src="/logo.svg" width={126} height={54} alt="Logo" />
          </Link>

          <p className="text-[36px]/[1.69] font-semibold max-w-[480px]">
            One of the best furniture agency
          </p>
        </div>
        <div className="flex flex-col items-end max-w-[440px]">
          <div>
            <p className="flex flex-row items-center gap-[10px] mb-[8px]">
              <span className="block w-[14px] h-[14px] bg-black-50 rounded-50"></span>
              Enter your email to get the laterst news
            </p>
            <label className="relative">
              <Image
                src="/half-arrow.svg"
                width={23}
                height={9}
                alt="Right arrow icon"
                className="absolute top-[50%] right-0 transform -translate-y-1/2"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-[100%] border-b-[1px] border-black-70 py-[15px] pr-[30px] placeholder-text-grayLight text-[16px] focus:outline-none  hover:border-b-[2px] transition-all"
              ></input>
            </label>
          </div>
          <div className="mt-[40px] max-w-[195px]">
            <p className="text-16 mb-[15px]">Follow us On</p>
            <div className="flex flex-row gap-[25px]">
              {footerData.map(({ name, icon, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  className="flex justify-center items-center w-[32px] h-[32px] bg-grayLight rounded-50 p-1 hover:bg-primary-10 transition-all"
                >
                  <Image src={icon} width={20} height={20} alt={name} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;