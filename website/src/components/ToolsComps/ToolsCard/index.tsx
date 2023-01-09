import React, { useState, useEffect, useContext } from "react";
import Header from "../../Header/Header";
import { GoRepo } from "react-icons/go";
import { MdDownload } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import UrlBtn from "../../Button/UrlBtn";
import Btn from "../../Button/Btn";
import Image from "next/image";
import { TheContext } from "src/Context/Context";

interface toolsCardProp {
  title: string;
  desc?: string;
  views: number;
  docsUrl: string;
  tags: any;
}
interface tags {
  title: string;
}
[];

function Index({
  title = "Title",
  desc = "description",
  views = 0,
  docsUrl,
  tags,
}: toolsCardProp) {
  const context = useContext(TheContext);
  return (
    <article className="rounded-2xl hover:opacity-80 shadow-md grad-light-01 relative overflow-hidden p-5 py-10 bg-gradient-to-tl from-dark-blue/50 dark:from-very-dark-blue dark:via-dark-blue to-very-light-blue  dark:to-dark-blue">
      <Image
        src={`/img/${context.theme === "dark" ? "blob02.png" : "blob01.png"}`}
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
        <>
          <Header
            title={title}
            subTitle={desc}
            cssStyle="!items-start !text-left"
          />
          <div className="flex mb-4 mt-5 gap-6 text-xl text-very-dark-blue dark:text-very-light-blue">
            <span className="flex items-center gap-1">Views:- {views}</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <>
              {tags &&
                tags.map((item: tags) => (
                  <span
                    key={Math.random() * 500}
                    className=" hover:opacity-75 !py-[2px] px-3 rounded-full bg-very-light-blue "
                  >
                    {item.title}
                  </span>
                ))}
            </>
          </div>
        </>
        <Btn
          href={docsUrl}
          ariaLabel={`Read Docs of tool ${title}`}
          text="Read Docs"
          icon={<FaChevronRight />}
          cssStyle={"w-fit mt-5 !rounded-2xl !py-2"}
        />
      </div>
    </article>
  );
}

export default Index;
