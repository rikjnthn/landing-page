import React from "react";
import Image from "next/image";

import { noto_sans } from "@/fonts";

const TeamMember = ({
  position,
  name,
  img,
}: {
  position: string;
  name: string;
  img?: string;
}) => {
  return (
    <div
      className={`${noto_sans.className} flex flex-col items-center gap-5 w-32 h-52`}
    >
      <div className="rounded-full">
        <Image
          className=""
          src={`/${img}`}
          alt={name}
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[#EE2417]">{name}</span>
        <span className="text-stone-600 text-sm">{position}</span>
      </div>
    </div>
  );
};

export default TeamMember;
