import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import Btn from "../Button/Btn";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { scrollX, scrollScale } from "src/AnimationVariants/animationVariants";

function Index() {
  return (
    <div
      id="about"
      className="max-w-[1100px] flex flex-col h-screen justify-center items-center mx-auto space-y-[30px] relative z-10 px-3 overflow-x-hidden"
    >
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ amount: 0.9, once: false }}
        variants={scrollScale(1.2)}
      >
        <Header
          title="Who we are"
          subTitle="most used tools by developer of all over the world"
        />
      </motion.div>
      <motion.div
      >
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ amount: 0.4, once: false }}
          variants={scrollScale(1.2)}
          className="text-xl text-center dark:text-white tracking-wider max-w-[1000px] mx-auto "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum
          maxime natus dolor sunt officiis blanditiis saepe culpa fugit animi,
          voluptas, accusantium ipsam ex. Voluptas pariatur aspernatur
          voluptatem itaque consectetur vel similique, soluta temporibus
          voluptatum provident cumque dolorum recusandae magni enim ab impedit
          qui nesciunt mollitia libero omnis. Hic, rem!
        </motion.p>
      </motion.div>
      <div className="mx-auto space-y-2 sm:space-y-0 sm:flex w-full sm:w-fit h-fit gap-3">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ amount: 0.9, once: false }}
          variants={scrollX(-50)}
        >
          <Btn
            href={"https://github.com/codinasion/open-tools"}
            ariaLabel="Join Codinasion on Github and Contribute to open-source projects"
            target="_blank"
            text={"Join codinasion"}
            cssStyle={"!bg-very-light-blue !text-very-dark-blue"}
            icon={<FaGithub />}
          />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ amount: 0.9, once: false }}
          variants={scrollX(50)}
        >
          <Btn
            href={"https://github.com/codinasion/open-tools"}
            ariaLabel="Contribute to open-tools with us on Github"
            target="_blank"
            text={"Contribute open-tools"}
            icon={<FiExternalLink />}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Index;
