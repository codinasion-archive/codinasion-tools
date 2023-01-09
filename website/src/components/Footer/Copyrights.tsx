import Image from "next/image";
import React from "react";
import Link from "@/components/Link";
import siteMetaData from "@/data/siteMetaData";

function Copyrights() {
  return (
    <div className="bg-dark-blue flex justify-center items-center gap-3 border-t-4 border-very-dark-blue p-1 text-white text-center">
      <span>
        {`</>`} with <span className="animate-pulse">💖</span> by{" "}
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          href={`${siteMetaData.githubUrl}`}
        >
          <b>Codinasion</b>
        </Link>
      </span>
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
