import React from "react";

import { noto_sans, tomorrow } from "@/fonts";

const Subscribe = () => {
  return (
    <section className="flex flex-col items-center px-5 py-20">
      <h1
        className={`${tomorrow.className} sm:text-[2.5rem] mb-20 font-semibold text-center text-orange-2`}
      >
        Subscribe To Our News
      </h1>
      <form
        className={`${noto_sans.className} flex items-center sm:w-[20rem] h-9 sm:h-12 pl-5 border border-orange-2 rounded-full mt-10`}
      >
        <input
          className="w-full h-full focus:outline-none"
          type="email"
          placeholder="email@gmail.com"
        />
        <button
          className="w-24 sm:w-32 h-full max-sm:text-sm bg-purple-1 text-white rounded-e-full"
          type="submit"
        >
          Get News
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
