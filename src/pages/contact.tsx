import { tomorrow, noto_sans } from "@/fonts";

const contact = () => {
  return (
    <main className="px-5 my-10 sm:my-20 sm:mx-10">
      <h1
        className={`${tomorrow.className} font-semibold text-center sm:text-[2rem]`}
      >
        Contact Us
      </h1>
      <form className={`${noto_sans.className} flex flex-col gap-5 p-5`}>
        <label className="font-medium" htmlFor="email">
          Email :{" "}
        </label>
        <input
          className="flex items-center h-10 px-4 border border-[#EE2417] focus:outline-0 rounded-md"
          type="email"
          id="email"
          placeholder="email@gmail.com"
        />
        <label className="mt-5 font-medium" htmlFor="messages">
          Message :{" "}
        </label>
        <textarea
          className="h-52 border px-4 py-2 border-[#EE2417] rounded-md"
          id="messages"
          placeholder="Message here"
        />

        <button
          className="w-32 h-10 bg-[#EE2417] text-white rounded-md ml-auto mt-5"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </main>
  );
};

export default contact;
