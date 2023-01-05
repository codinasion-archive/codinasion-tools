import Image from "next/image";
import React from "react";

function Copyrights() {
  return (
    <div className="bg-dark-blue flex justify-center items-center gap-3 border-t-4 border-very-dark-blue p-1 text-white text-center">
      <span>{`</>`} with <span className="animate-pulse">💖</span> by Codinasion</span>
      {/* <Image
        src="/LOGO.png"
        width={24}
        height={24}
        alt="codinasion logo"
        className="rounded-full"
      /> */}
    </div>
  );
}

export default Copyrights;
