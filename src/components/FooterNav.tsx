import Link from "next/link";

const NavLink = ({
  name,
  href,
  disabled,
}: {
  name: string;
  href: string;
  disabled?: boolean;
}) => {
  return (
    <li
      className={`flex items-center w-fit h-8 text-white ${
        disabled ? "hover:underline-offset-0" : "hover:underline"
      } hover:opacity-100`}
    >
      <Link
        className={disabled ? "pointer-events-none opacity-50" : ""}
        href={href}
      >
        {name}
      </Link>
    </li>
  );
};
export default NavLink;
