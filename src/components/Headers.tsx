import Image from "next/image";
import React, { useState } from "react";
import { noto_sans } from "@/fonts";

import Logo from "./Logo";
import NavLink from "./NavLink";

const Headers = () => {
  const [hamburger, setHamburger] = useState<boolean>(false);
  const handleClose = () => setHamburger(() => false);
  return (
    <header className="flex items-center justify-between h-12 px-3 sm:px-8 sm:h-16 bg-[#EE2417]">
      <Logo />
      <button
        onClick={() => setHamburger((prev) => !prev)}
        className="sm:hidden"
        type="button"
      >
        {!hamburger ? (
          <Image src="/hamburger.svg" alt="hamburger" width={25} height={25} />
        ) : (
          <Image src="/close.svg" alt="close" width={20} height={20} />
        )}
      </button>
      <div
        className={`flex max-sm:flex-col max-sm:absolute right-0 top-12 max-sm:w-48 p-5 max-sm:bg-[#EE2417] max-sm:rounded-es-md z-20 ${
          hamburger ? "" : "hidden"
        } sm:block`}
      >
        <ul
          className={`${noto_sans.className} flex flex-col sm:flex-row sm:gap-4 text-white text-sm`}
        >
          <NavLink close={handleClose} href="/" name="Home" />
          <NavLink close={handleClose} href="/product" name="Product" />
          <NavLink close={handleClose} href="/contact" name="Contact" />
        </ul>
      </div>
    </header>
  );
};

export default Headers;
