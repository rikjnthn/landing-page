import Link from "next/link";

const NavLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <li className="flex items-center w-fit h-8 text-white hover:underline hover:opacity-100">
      <Link href={href}>{name}</Link>
    </li>
  );
};
export default NavLink;
