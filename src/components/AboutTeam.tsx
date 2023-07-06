import React from "react";

import TeamMember from "./TeamMember";
import { tomorrow } from "@/fonts";

const AboutTeam = () => {
  return (
    <section className="flex flex-col items-center px-5 pt-20">
      <h1 className={`${tomorrow.className} sm:text-[2.5rem] mb-10 font-semibold text-[#D60B42]`}>About The Team</h1>
      <div className="columns-2 md:flex justify-between mt-10">
        <TeamMember img="ellipse.svg" position="Founder" name="John" />
        <TeamMember img="rectangle.svg" position="Designer" name="Erick" />
        <TeamMember img="star.svg" position="Product Tester" name="Michael" />
        <TeamMember img="polygon.svg" position="Sales" name="Alex" />
      </div>
    </section>
  );
};

export default AboutTeam;
