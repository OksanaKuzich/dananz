"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.svg";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="container flex flex-row items-center justify-between py-[42px]">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-[72px] text-black-50 text-[16px]">
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
                className="text-[14px] font-medium bg-primary-100  hover:bg-primary-90 transition-all text-white py-[14px] px-[32px]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
