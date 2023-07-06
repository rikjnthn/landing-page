import React from "react";
import Image from "next/image";
import Link from "next/link";

import { pt_serif } from "@/fonts";

const Logo = () => {
  return (
    <div>
      <Link className="flex items-center cursor-default" href="/">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <span
          className={`${pt_serif.className} font-bold text-white sm:text-lg`}
        >
          Embroidered Pond
        </span>
      </Link>
    </div>
  );
};

export default Logo;
