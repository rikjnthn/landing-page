import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({
  close,
  name,
  href,
}: {
  close?: () => void;
  name: string;
  href: string;
}) => {
  const pathname = useRouter().pathname;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(() => pathname === href);
  }, [pathname, href]);
  return (
    <li
      onClick={close}
      className={`flex items-center w-fit h-8 text-white ${
        isOpen ? "opacity-100" : "opacity-75"
      } hover:underline hover:opacity-100`}
    >
      <Link href={href}>{name}</Link>
    </li>
  );
};
export default NavLink;
