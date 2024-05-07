"use client";
import Image from "next/image.js";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 z-0">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2  relative">
          <Image
            src={"/assets/hero.png"}
            fill
            alt=""
            className="object-contain z-0"
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2   gap-4 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-bold text-wrap">
            Crafting digital experiences, Desinging Tomorow
          </h1>

          {/* DESC */}
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eius
            dolore quae sequi nulla ratione?
          </p>

          {/* BUTTON */}
          <div className="flex gap-4">
            <button className="p-3 rounded-lg ring-1 ring-black bg-black text-white">
              View my work
            </button>
            <button className="p-3 rounded-lg ring-1 ring-black">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
