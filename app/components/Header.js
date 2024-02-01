import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="container flex flex-row items-center justify-between py-[42px]">
        <Link href="/">
          <Image src="/logo.svg" width={126} height={54} alt="Logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-[72px] text-black-50 text-[16px]">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/team">Our Team</Link>
            <Link
              href="/contacts"
              className="text-[14px] font-medium bg-primary-100  hover:bg-primary-90 transition-all text-white py-[14px] px-[32px]"
            >
              Contact Us
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
