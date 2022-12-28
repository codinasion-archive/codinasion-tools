import React, { useState, useEffect } from "react";
import { MdDownload } from "react-icons/md";
import { GoRepo } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
import { Download } from "@mui/icons-material";
import { url } from "inspector";
import Btn from "../Button/Btn";
import Image from "next/image";

interface ToolsCardProp {
  cssStyle?: string;
  title: string;
  repoUrl: string;
  download: number | null;
}

const BasicCard: React.FC<ToolsCardProp> = ({
  title = "card-title",
  repoUrl,
  download = null,
}) => {
  const [themeState, setThemeState] = useState<string>("light");

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const newColorScheme = e.matches ? "dark" : "light";
        setThemeState(newColorScheme)
      });
  }, [themeState]);
  return (
    <div className="w-full h-fit p-10 bg-gradient-to-tl from-dark-blue/50 dark:from-very-dark-blue dark:via-dark-blue to-very-light-blue  dark:to-dark-blue relative overflow-hidden rounded-xl hover:scale-105">
      <Image
        src={`/img/${themeState === "dark" ? "blob02.png" : "blob01.png"}`}
        alt={"blob"}
        width={300}
        height={300}
        className={"absolute right-0 bottom-10"}
      />
      <div className="absolute h-full aspect-square mix-blend-overlay top-0 left-0 -rotate-90 flex flex-col text-4xl opacity-30">
        <span className="text-lg -mb-5">Codinasion</span>
        <span>Codinasion</span>
        <span className="-mt-5 text-xl w-full text-right">Codinasion</span>
      </div>

      <div className="relative w-full grid items-center justify-center text-center gap-4 dark:text-very-light-blue">
        <h3 className="text-4xl font-bold">{title}</h3>
        <div className="flex mb-4 -mt-3 gap-6 text-very-dark-blue/50 dark:text-white/50">
          {download && (
            <span className="flex items-center gap-3 text-lg">
              <MdDownload /> {download}
            </span>
          )}

          <span className="flex items-center gap-1 text-lg">
            <GoRepo />
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          </span>
        </div>
        <Btn
          href={"/tools/"}
          ariaLabel={'Go to tools page'}
          text="Read Docs"
          cssStyle="mx-auto text-lg !py-2 !px-5"
          icon={<FaChevronRight />}
        />
      </div>
    </div>
  );
};

export default BasicCard;
