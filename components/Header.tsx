import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/image-PhotoRoom (12) 1.png";
import menu from "@/assets/burger-menu-svgrepo-com.svg";
import "../app/globals.css";

const Header = () => {
  return (
    <header className="fixed bg-white flex justify-between md:justify-evenly w-screen px-[1.5rem] py-[1rem] md:py-[1.5rem] items-center border-b-[1px] z-50">
      <Link href={"/"}>
        <Image src={logo} height={100} width={100} alt="logo-image" />
      </Link>
      <div className="md:hidden">
        <Image src={menu} height={45} width={45} alt="menu-image" />
      </div>
      <div className="hidden md:flex tracking-wider gap-[2rem] lg:gap-[2.5rem]">
        <Link className="link-with-underline" href={"/"}>
          Home
        </Link>
        <Link className="link-with-underline" href={"/"}>
          Contact
        </Link>
        <Link className="link-with-underline" href={"/"}>
          Confidentiality policy{" "}
        </Link>
        <Link className="link-with-underline" href={"/"}>
          About Us
        </Link>
        <Link className="link-with-underline" href={"/"}>
          Blog
        </Link>
      </div>
    </header>
  );
};

export default Header;
