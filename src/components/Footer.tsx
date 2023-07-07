import React from "react";
import Image from "next/image";

import Logo from "./Logo";
import FooterNav from "./FooterNav";
import { noto_sans } from "@/fonts";

const Footer = () => {
  return (
    <footer className="flex flex-col h-[20rem] p-5 sm:px-12 md:px-20 bg-[#D6360B]">
      <Logo />
      <ul className={`${noto_sans.className} mt-6 text-sm`}>
        <FooterNav href="/" name="Home" />
        <FooterNav href="/product" name="Product" />
        <FooterNav href="/contact" name="Contact" />
        <FooterNav disabled href="/terms-of-service" name="Terms of Service" />
      </ul>
      <Image
        className="ml-auto mt-auto"
        src="/instagram.svg"
        alt="instagram"
        width={40}
        height={40}
      />
    </footer>
  );
};

export default Footer;
