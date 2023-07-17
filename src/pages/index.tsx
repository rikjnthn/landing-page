import Image from "next/image";

import { tomorrow, noto_sans } from "@/fonts";
import Hero from "@/components/Hero";
import AboutTeam from "@/components/AboutTeam";
import Subscribe from "@/components/Subscribe";

function Home() {

  return (
    <main className={noto_sans.className}>
      <Hero />
      <section className="py-20">
        <h1
          className={`${tomorrow.className} sm:text-[2.5rem] sm:leading-10 text-center font-semibold text-orange-2 px-5 mb-10`}
        >
          Made By the World&apos;s Top Designer
        </h1>
        <div className="flex items-center justify-around h-[24rem] max-sm:gap-4 mx-5">
          <Image
            className='sect-2-image rounded-md sm:w-52 md:w-72'
            src="/shoes-photo.jpg"
            alt=""
            width={150}
            height={300}
          />
          <p className="text-sm sm:text-lg w-44 md:w-52">
            Creating stylish yet comfortable footwear for you
          </p>
        </div>
      </section>
      <section className={`flex flex-col h-[24rem] px-5 py-20 bg-red-1`}>
        <h1
          className={`${tomorrow.className} sm:text-[2.5rem] sm:leading-10 text-center font-semibold text-white`}
        >
          Tested Before Selling To You
        </h1>
        <p className="text-white text-sm sm:text-lg text-center max-w-sm m-auto">
          We ensure that our products have been tested, ensuring that the items
          sold to you are high quality.
        </p>
      </section>
      <AboutTeam />
      <Subscribe />
    </main>
  );
}

export default Home;
