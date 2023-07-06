import React from "react";
import Image from "next/image";

import heroImage from "public/hero-image.png";
import { tomorrow } from "@/fonts";

const Hero = () => {
  return (
    <section
      className={`${tomorrow.className} flex items-center sm:justify-around h-[15rem] sm:h-[30rem] px-5 bg-[#F7600C]`}
    >
      <div className="text-white z-10">
        <h1 className="font-semibold sm:text-[2rem]">Trendy Footwear</h1>
        <p className="max-sm:text-sm mt-3">
          Stylish yet{" "}
          <span className="text-highlight text-[#EE2417]">
            <span className="relative z-10">comfortable</span>
          </span>
        </p>
      </div>
      <div className="max-sm:absolute w-32 max-sm:right-1 sm:w-52 md:w-80">
        <Image className="hero-image" src={heroImage} alt="Footwear" />
      </div>
    </section>
  );
};

export default Hero;
