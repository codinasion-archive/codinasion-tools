import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { GoRepo } from "react-icons/go";
import { MdDownload } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import UrlBtn from "../Button/UrlBtn";
import Btn from "../Button/Btn";
import Image from "next/image";

interface toolsCardProp {
  title: string;
  desc?: string;
  download: string | number;
  repoUrl: string;
  docsUrl: string;
  tags: string[];
}

function Index({
  title = "Title",
  desc = "description",
  download = 0,
  repoUrl,
  docsUrl,
  tags,
}: toolsCardProp) {
  const [themeState, setThemeState] = useState<string>("");

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setThemeState("dark")
      : setThemeState("light");
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const theme = event.matches ? "dark" : "light";
        setThemeState(theme);
      });
  }, [themeState]);
  return (
    <article className="rounded-2xl hover:opacity-80 shadow-md grad-light-01 relative overflow-hidden p-5 py-10 bg-gradient-to-tl from-dark-blue/50 dark:from-very-dark-blue dark:via-dark-blue to-very-light-blue  dark:to-dark-blue">
      <Image
        src={`/img/${themeState === "dark" ? "blob02.png" : "blob01.png"}`}
        alt={"blob"}
        width={500}
        height={500}
        className={"absolute left-0 top-10"}
      />

      <div className="absolute h-full aspect-square mix-blend-overlay top-0 left-5 -rotate-90 flex flex-col text-4xl opacity-30">
        <span className="text-xl -mb-5">Codinasion</span>
        <span className="text-4xl text-right mt-6">Codinasion</span>
        <span className="-mt-20 text-6xl pr-5 w-full text-right">
          Codinasion
        </span>
      </div>

      <div className="relative z-20">
        <Header
          title={title}
          subTitle={desc}
          cssStyle="!items-start !text-left"
        />
        <div className="flex mb-4 mt-5 gap-6 text-xl text-very-dark-blue dark:text-very-light-blue">
          <span className="flex items-center gap-1">
            <MdDownload />
            {download}
          </span>
          <span className="flex items-center gap-1">
            <GoRepo />
            <UrlBtn
              href={repoUrl}
              ariaLabel={`Go to ${repoUrl} github page`}
              name="Repository"
              cssStyle="!p-0 !border-0"
              target="_blank"
            />
          </span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags &&
            tags.map((item) => (
              <span
                key={Math.random() * 500}
                className=" hover:opacity-75 !py-[2px] px-3 rounded-full bg-very-light-blue "
              >
                {item}
              </span>
            ))}
        </div>
        <Btn
          href={docsUrl}
          ariaLabel={`Read Documentations of ${title}`}
          text="Read Docs"
          icon={<FaChevronRight />}
          cssStyle={"w-fit mt-5 !rounded-2xl !py-2"}
        />
      </div>
    </article>
  );
}

export default Index;
