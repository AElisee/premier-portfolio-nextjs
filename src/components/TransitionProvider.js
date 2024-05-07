"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Navbar from "./Navbar.js";
import { usePathname } from "next/navigation.js";

const TransitionProvider = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "100vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <motion.div
          className="fixed m-auto  top-0 left-0 right-0 bottom-0 text-white text-6xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="capitalize"> {pathname.slice(1)}</span>
        </motion.div>

        <motion.div
          className="h-screen w-screen fixed bg-black bottom-0 rounded-t-[100px] z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)] border-red-700">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
