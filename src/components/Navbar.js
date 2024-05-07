"use client";
import Image from "next/image.js";
import Link from "next/link.js";
import React, { useState } from "react";
import Navlink from "./Navlink.js";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // FRAMER MOTION VARIANTS
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemsVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-x-hidden z-50">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link, index) => (
          <Navlink key={index} link={link} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link
          href={"/"}
          className="text-sm w-[100px] bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Elisha</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* SOCIAL LINK */}
      <div className="hidden md:flex gap-3 w-1/3 justify-end">
        <Link href={"#"}>
          <Image src="/assets/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"#"}>
          <Image src="/assets/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"#"}>
          <Image src="/assets/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"#"}>
          <Image src="/assets/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"#"}>
          <Image src="/assets/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"#"}>
          <Image src="/assets/dribbble.png" alt="" width={24} height={24} />
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between relative z-50"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <motion.div
            className={`w-10 h-1 bg-black rounded origin-left bg-${
              isOpen ? "white" : "black"
            }`}
            variants={topVariants}
            animate={isOpen ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className="w-10 h-1 bg-black rounded"
            variants={centerVariants}
            animate={isOpen ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className={`w-10 h-1  rounded origin-left bg-${
              isOpen ? "white" : "black"
            }`}
            variants={bottomVariants}
            animate={isOpen ? "opened" : "closed"}
          ></motion.div>
        </button>

        {/* MENU LIST */}
        {isOpen && (
          <motion.div
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl z-40"
            variants={listVariants}
            initial="closed"
            animate="opened"
          >
            {links.map((link, index) => (
              <motion.div key={index} variants={listItemsVariants}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
