import React from "react";
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
      className="max-w-[1100px] flex flex-col py-32 pb-60 justify-center items-center mx-auto space-y-[30px] relative z-10 px-3 overflow-x-hidden"
    >
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ amount: 0.9, once: false }}
        variants={scrollScale(1.2)}
      >
        <Header
          title="Who we are"
          subTitle="developer from all over the world"
        />
      </motion.div>
      <motion.div>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ amount: 0.4, once: false }}
          variants={scrollScale(1.2)}
          className="text-xl text-center dark:text-white tracking-wider max-w-[1000px] mx-auto "
        >
          We are a group of developer/programer from all over the world helps
          others developer problems by our open-source projects. We provide a
          wide range of programmings and tools in multiple languages which is
          created by our independent developers. Our all time favorite repo by
          developers is{" "}
          <span className="px-2 bg-[gold] rounded-full text-black">
            Program
          </span>
          , offer you every type of programming in multiple languages. And
          codinasion is open-source it means any developer who know programmings
          can contribute us.
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
            ariaLabel="Contribute open-tools on Github"
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
