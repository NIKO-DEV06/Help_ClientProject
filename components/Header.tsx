"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/image-PhotoRoom (12) 1.png";
import cancel from "@/assets/cancel2-svgrepo-com.svg";
import menu from "@/assets/burger-menu-svgrepo-com.svg";
import "../app/globals.css";

const Header = () => {
  const [isNav, setIsNav] = useState(false);
  const openNav = () => {
    setIsNav(true);
    console.log("opened");
  };
  const closeNav = () => {
    setIsNav(false);
  };

  const navVariants = {
    hidden: {
      x: "100%",
    },
    visible: {
      x: "0%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        damping: 25,
        stiffness: 400,
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <header className="fixed bg-white flex justify-between md:justify-evenly w-screen px-[1.5rem] py-[1rem] md:py-[1.5rem] items-center border-b-[1px] z-50">
        <Link href={"/"}>
          <Image src={logo} height={100} width={100} alt="logo-image" />
        </Link>
        <div className="md:hidden" onClick={openNav}>
          <Image src={menu} height={35} width={35} alt="menu-image" />
        </div>
        <div className="hidden md:flex tracking-wider gap-[2rem] lg:gap-[2.5rem]">
          <Link className="link-with-underline" href={"/"}>
            Home
          </Link>
          <Link className="link-with-underline" href={"/"}>
            Contact
          </Link>
          <Link className="link-with-underline" href={"/"}>
            Confidentiality policy
          </Link>
          <Link className="link-with-underline" href={"/"}>
            About Us
          </Link>
          <Link className="link-with-underline" href={"/"}>
            Blog
          </Link>
        </div>
      </header>
      <AnimatePresence initial={true} mode="wait">
        {isNav && (
          <Fragment>
            <motion.div
              key={Math.random()}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={navVariants}
              className="fixed md:hidden top-0 bottom-0 right-0 z-[70] left-[30%] bg-[#0000007F] backdrop-blur-[2rem] flex flex-col gap-[2.5rem] md:font-[300] uppercase tracking-wider text-[0.95rem] py-[10rem] px-[2rem] text-white"
            >
              <Image
                onClick={closeNav}
                src={cancel}
                alt="cancel-svg"
                width={40}
                height={40}
                className="fixed right-[1.5rem] top-[1.5rem] cursor-pointer"
              />
              <Link
                onClick={closeNav}
                className="flex gap-[0.5rem] cursor-pointer"
                href={"/"}
              >
                <span className="font-bold">00</span> Home
              </Link>
              <Link
                onClick={closeNav}
                className="flex gap-[0.5rem] cursor-pointer"
                href={"/"}
              >
                <span className="font-bold">01</span> Contact
              </Link>
              <Link
                onClick={closeNav}
                className="flex gap-[0.5rem] cursor-pointer"
                href={"/"}
              >
                <span className="font-bold text-sm">02</span> Confidentiality
                policy
              </Link>
              <Link
                onClick={closeNav}
                className="flex gap-[0.5rem] cursor-pointer"
                href={"/"}
              >
                <span className="font-bold">03</span> About Us
              </Link>
              <Link
                onClick={closeNav}
                className="flex gap-[0.5rem] cursor-pointer"
                href={"/"}
              >
                <span className="font-bold">04</span> Blog
              </Link>
            </motion.div>
            <motion.div
              key="backdrop"
              className="fixed md:hidden bg-black inset-0 z-[60] opacity-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={closeNav}
            ></motion.div>
          </Fragment>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
