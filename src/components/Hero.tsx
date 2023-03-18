"use client";
import React from "react";

import { styles } from "@/styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <main className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute  top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Felopater</span>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Hero;
