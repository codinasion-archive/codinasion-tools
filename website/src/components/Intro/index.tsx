import React from "react";
import { Jura } from "@next/font/google";
import Btn from "../Button/Btn";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { scrollScale } from "src/AnimationVariants/animationVariants";

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura",
  weight: ["500"],
});

function Intro() {
  return (
    <motion.div
      className="max-w-[1100px] py-12 h-screen mx-auto flex flex-col justify-center items-center overflow-x-hidden space-y-10 relative px-3"
    >
      <div className="h-24"></div>
      <motion.h1
        initial="offscreen"
        whileInView={"onscreen"}
        variants={scrollScale(1.2)}
        viewport={{ amount: 0.6, once: false }}
        className={`${jura.className} text-[4rem] dark:text-very-light-blue sm:text-[6rem] md:text-[8rem] lg:text-[10rem] txt-shadow text-center leading-[100.3%] tracking-wide`}
      >
        {" "}
        <span className="block"> Creative</span> studio
      </motion.h1>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={scrollScale(1.2)}
        viewport={{ amount: 0.6, once: false }}
        className="max-w-[1000px] text-lg sm:text-xl font-normal tracking-wide text-center text-very-dark-blue dark:text-very-light-blue"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        quibusdam culpa tempore. Repudiandae accusamus laboriosam harum ipsum
        animi, tempore repellendus fugiat tempora obcaecati, debitis culpa
        iusto, facilis exercitationem at! Dolore!
      </motion.p>
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={scrollScale(1.2)}
        viewport={{ amount: 0.6, once: false }}
      >
        <Btn
          href={"https://github.com/codinasion"}
          ariaLabel="Join Codinasion on Github"
          target="_blank"
          text={"Join Codinasion"}
          icon={<FaGithub />}
        />
      </motion.div>
    </motion.div>
  );
}

export default Intro;
