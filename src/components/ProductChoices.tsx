import React from "react";

import { tomorrow, noto_sans } from "@/fonts";
import sandals from "public/sandals.jpg";
import boots from "public/boots.jpg";
import loafers from "public/loafers.jpg";
import sneakers from "public/sneakers.jpg";
import ProductFilter from "./ProductFilter";


const ProductChoices = () => {
  return (
    <section className={`${noto_sans.className} flex flex-col p-5 my-10 sm:my-20`}>
      <h1
        className={`${tomorrow.className} font-semibold sm:text-[2.5rem] mx-auto text-orange-2`}
      >
        Our Product
      </h1>

      <div className="grid grid-cols-2 place-items-center gap-10 md:flex md:justify-center mt-10">
        <ProductFilter img={sandals} name="Sandals" />
        <ProductFilter img={boots} name="Boots" />
        <ProductFilter img={loafers} name="Loafers" />
        <ProductFilter img={sneakers} name="Sneakers" />
      </div>
    </section>
  );
};

export default ProductChoices;
