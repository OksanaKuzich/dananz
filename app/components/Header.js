"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.svg";
import menu from "../../public/menu.svg";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="container flex flex-row lg:flex-col xl:flex-row items-center justify-between content-between 2xl:content-start gap-[15px] xl:gap-0 py-[20px] xl:py-[42px] flex-wrap">
        <Link href="/" className="mr-auto">
          <Image src={logo} alt="Logo" />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center justify-between lg:gap-[72px] text-black-50 text-16">
            <li>
              <Link href="/" className={pathname == "/" ? "font-semibold" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname == "/about" ? "font-semibold" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={pathname == "/services" ? "font-semibold" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className={pathname == "/portfolio" ? "font-semibold" : ""}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={pathname == "/team" ? "font-semibold" : ""}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="text-14 font-medium bg-primary-100  hover:bg-primary-90 transition-all text-white py-[14px] px-[32px] whitespace-nowrap"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="lg:hidden flex items-center h-[34px] hover:bg-primary-10 focus:bg-primary-10 px-[5px]"
        >
          <Image src={menu} alt="Icon mobile menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
