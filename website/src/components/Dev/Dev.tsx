import React, { useState, useContext } from "react";
import Header from "../Header/Header";
import ProfileImg from "../ProfileImg/ProfileImg";
import Btn from "../Button/Btn";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { scrollScale } from "src/AnimationVariants/animationVariants";
import { TheContext } from "src/Context/Context";

interface devsProfileType {
  avatar_url: string;
  html_url: string;
  name: string;
}
const Dev = () => {
  const defaultImg =
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";
  const context = useContext(TheContext);
  const {
    devs: { devs },
  } = context;
  return (
    context.devs.devs && (
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
            {devs.slice(0, 10).map((item: devsProfileType) => (
              <ProfileImg
                key={Math.random() * 50 + "devrow-1"}
                profileUrl={item.html_url}
                name={item.name}
                imgUrl={item.avatar_url}
                cssStyle={"hover:scale-105"}
              />
            ))}
          </div>
          <div className="flex gap-2 sm:gap-5 flex-wrap justify-center">
            {devs.slice(10, 18).map((item: devsProfileType) => (
              <ProfileImg
                key={Math.random() * 50 + "devrow-1"}
                name={item.name}
                profileUrl={item.html_url}
                imgUrl={item.avatar_url}
                cssStyle={"hover:scale-105"}
              />
            ))}
          </div>
          <div className="flex gap-2 sm:gap-5 flex-wrap justify-center">
            {devs.slice(18, 26).map((item: devsProfileType) => (
              <ProfileImg
                profileUrl={item.html_url}
                key={Math.random() * 50 + "devrow-1"}
                name={item.name}
                imgUrl={item.avatar_url}
                cssStyle={"hover:scale-105"}
              />
            ))}
            <Link
              href="https://github.com/orgs/codinasion/teams/members/members"
              target={"_blank"}
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
    )
  );
};

export default Dev;
