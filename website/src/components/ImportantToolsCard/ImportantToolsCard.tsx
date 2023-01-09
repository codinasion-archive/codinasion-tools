import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import BasicCard from "../ToolsCard/basicCard";
import UrlBtn from "../Button/UrlBtn";
import { motion } from "framer-motion";
import {
  scrollX,
  scrollScale,
} from "../../AnimationVariants/animationVariants";
import { TheContext } from "src/Context/Context";
import Link from "next/link";
import siteMetaData from "@/data/siteMetaData";

interface basicToolsType {
  title: string;
  repoUrl: string;
  slug: string;
}
function ImportantToolsCard() {
  const context = useContext(TheContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    context.toolsData.toolsStatus && (
      <div
        id="tools"
        className="relative min-h-screen max-w-[1100px] mx-auto flex flex-col justify-center overflow-x-hidden !items-center gap-10 px-5"
      >
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={scrollScale(1.2)}
          viewport={{ amount: 0.8, once: false }}
        >
          <Header
            title="Most used tools"
            subTitle="most used tools by developer of all over the world"
          />
        </motion.div>
        <div className="grid sm:grid-cols-2 w-full gap-2 sm:gap-4">
          {
            // context.toolsData
            context.toolsData.data.slice(0, 4).map((item: basicToolsType) => (
              <motion.div
                key={Math.random() * 50 + "basicToold"}
                initial="offscreen"
                whileInView={"onscreen"}
                variants={scrollX(-50)}
                viewport={{ amount: 0.9, once: false }}
              >
                <BasicCard
                  title={item.title}
                  repoUrl={`${siteMetaData.repoUrl}`}
                  docsUrl={`${item.slug}`}
                />
              </motion.div>
            ))
          }
        </div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={scrollX(-100)}
          viewport={{ amount: 0.9, once: false }}
          className="max-w-[1000px] w-full flex items-center"
        >
          <hr className="w-full bottom-2 border-white" />
          <Link
            href={"/tools"}
            aria-label="Explore more tools of codinasion-tools by codinasion"
            className="px-5 text-lg dark:text-white text-very-dark-blue hover:opacity-70 hover:scale-90"
          >
            More_tools
          </Link>
        </motion.div>
      </div>
    )
  );
}

export default ImportantToolsCard;
