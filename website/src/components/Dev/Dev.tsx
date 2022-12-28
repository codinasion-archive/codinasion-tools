import React, { useState } from "react";
import Header from "../Header/Header";
import ProfileImg from "../ProfileImg/ProfileImg";
import Btn from "../Button/Btn";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { scrollScale } from "src/AnimationVariants/animationVariants";

const Dev = () => {
  const defaultImg =
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";

  return (
    <div
      id="dev"
      className="max-w-[1100px] overflow-x-hidden min-h-screen relative mx-auto flex flex-col justify-center items-center space-y-[50px] p-3"
    >
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ amount: 0.8, once: false }}
        variants={scrollScale(1.2)}
      >
        <Header
          title="Our Contributors"
          subTitle="I’ve written a few thousand words on why traditional"
          cssStyle="!text-very-light-blue"
        />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ amount: 0.8, once: false }}
        variants={scrollScale(1.2)}
        className="flex max-w-[1000px] flex-wrap items-center justify-center gap-2 sm:gap-5"
      >
        <div className="flex gap-2 sm:gap-5 flex-wrap justify-center">
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          {/* <ProfileImg imgUrl={defaultImg} details={true} cssStyle={"hover:scale-105"} /> */}
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
        </div>
        <div className="flex gap-2 sm:gap-5 flex-wrap justify-center">
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
        </div>
        <div className="flex gap-2 sm:gap-5 flex-wrap justify-center">
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />
          <ProfileImg imgUrl={defaultImg} cssStyle={"hover:scale-105"} />

          <Link
            href="#"
            className="text-3xl animate-pulse flex items-end justify-center aspect-square rounded-full p-2 w-16 sm:w-20 text-white"
          >
            .....
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ amount: 0.8, once: false }}
        variants={scrollScale(1.2)}
      >
        <Btn
          href={"https://github.com/codinasion/"}
          ariaLabel="Join Codinasion on Github"
          target={"_blank"}
          text={"Join Codinasion"}
          icon={<FaGithub />}
        />
      </motion.div>
    </div>
  );
};

export default Dev;
