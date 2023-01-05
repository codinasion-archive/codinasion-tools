import React, { useContext } from "react";
import { GoRepo } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
import Btn from "../../Button/Btn";
import Image from "next/image";
import { TheContext } from "src/Context/Context";

interface ToolsCardProp {
  cssStyle?: string;
  title: string;
  repoUrl: string;
  docsUrl: string;
}

const BasicCard: React.FC<ToolsCardProp> = ({
  title = "card-title",
  repoUrl,
  docsUrl,
}) => {
  
  const context = useContext(TheContext)
  return (
    <div className="w-full h-fit p-10 bg-gradient-to-tl from-dark-blue/50 dark:from-very-dark-blue dark:via-dark-blue to-very-light-blue grid justify-center items-center dark:to-dark-blue relative overflow-hidden rounded-xl hover:scale-105 min-h-[300px]">
      <Image
        src={`/img/${context.theme === "dark" ? "blob02.png" : "blob01.png"}`}
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

      <div>
        <div className="relative w-full grid items-center justify-center text-center gap-4 dark:text-very-light-blue">
          <h3 className="text-4xl font-bold">{title}</h3>
          <div className="flex mb-4 -mt-3 gap-6 text-very-dark-blue/50 dark:text-white/50 justify-center">
            <span className="flex items-center gap-1 text-lg">
              <GoRepo />
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                Repository
              </a>
            </span>
          </div>
          <Btn
            href={`/tools/${docsUrl}`}
            ariaLabel={`Read Docs of tool ${title}`}
            text="Read Docs"
            cssStyle="mx-auto text-lg !py-2 !px-5"
            icon={<FaChevronRight />}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
