import logo from "@/assets/image-PhotoRoom (12) 1.png";
import appStore from "@/assets/image 1.png";
import playStore from "@/assets/image 2.png";
import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-2 lg:grid-cols-4 place-items-center md:place-items-start gap-[2rem] px-[5rem] pb-[3rem] md:scale-95">
      <div className="flex flex-col gap-[1rem] text-center md:text-left">
        <Link href={"/"} className="mx-auto md:mx-0">
          <Image src={logo} height={100} width={100} alt="logo-image" />
        </Link>
        <p className="opacity-60">
          Make your to-do list wherever <br /> you are with our mobile app.
        </p>
        <p className="opacity-60">&copy;2023. All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-[0.5rem] text-center md:text-left">
        <h2 className="font-bold text-[#2B4E8C]">About Us</h2>
        <Link className="link-with-underline" href={"/"}>
          <p className="opacity-60">Frequently asked questions</p>
        </Link>
        <Link className="link-with-underline" href={"/"}>
          <p className="opacity-60">Confidentiality policy </p>
        </Link>
        <Link className="link-with-underline" href={"/"}>
          <p className="opacity-60">Contact</p>
        </Link>
        <Link className="link-with-underline" href={"/"}>
          <p className="opacity-60">Blog</p>
        </Link>
      </div>
      <div className="flex flex-col gap-[0.5rem] text-center md:text-left">
        <h2 className="font-bold text-[#2B4E8C]">Contacts</h2>
        <p className="opacity-60">+351-965-990-000</p>
        <p className="opacity-60">@helpyou@gmail.com</p>
      </div>
      <div className="flex flex-col gap-[0.5rem] text-center md:text-left">
        <h2 className="font-bold text-[#2B4E8C]">Download our app</h2>
        <p className="opacity-60">
          Tackle your to-do list wherever you are
          <br className="hidden md:flex" /> with our mobile app.
        </p>
        <div className="flex mt-[1.5rem] gap-[1rem] mx-auto md:mx-0">
          <button>
            <Image
              src={appStore}
              height={120}
              width={120}
              alt="appstore"
              className="cursor-pointer h-[2.7rem]"
            />
          </button>
          <button>
            <Image
              src={playStore}
              height={120}
              width={120}
              alt="playstore"
              className="cursor-pointe  h-[2.7rem]"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
