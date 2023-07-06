import Image from "next/image";
import React from "react";

import productHero from "public/product-hero.jpg";

const ProductHero = () => {
  return (
    <section>
      <Image
        className="md:w-1/2 md:rounded-lg md:mx-auto md:mt-10"
        src={productHero}
        alt="Product hero"
      />
    </section>
  );
};

export default ProductHero;
