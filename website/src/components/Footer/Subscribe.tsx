import React from "react";

function Subscribe() {
  return (
    <form
      action="#"
      className="flex gap-1 w-full sm:w-[450px] items-center"
      id="subscribe-us"
      aria-label="subscribe-form"
    >
      <input
        type="email"
        name="subscribe"
        id="subscribe"
        aria-label="subscribe"
        className="w-full border-2 px-4
        h-fit p-2 text-lg bg-very-light-blue rounded-xl border-very-dark-blue focus:border-very-dark-blue"
        placeholder="Enter your email"
      />
      <button
        className="bg-very-dark-blue h-full p-2 px-3 text-lg hover:text-very-dark-blue hover:border-very-dark-blue border-2 border-transparent hover:bg-very-light-blue rounded-xl text-white"
        type="submit"
        aria-labelledby="subscribe-us"
      >
        Subscribe
      </button>
      {/* <Btn text={"Subscribe"} cssStyle={"py-2 !px-4 !text-lg"} /> */}
    </form>
  );
}

export default Subscribe;
