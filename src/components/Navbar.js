"use client";
import Image from "next/image.js";
import Link from "next/link.js";
import React, { useState } from "react";
import Navlink from "./Navlink.js";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
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
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>

        {/* MENU LIST */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl">
            {links.map((link, index) => (
              <Link key={index} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
