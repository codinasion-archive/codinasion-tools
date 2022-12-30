import React from "react";
import { motion } from "framer-motion";
import UrlBtn from "../Button/UrlBtn";
import ProfileImg from "../ProfileImg/ProfileImg";
import { BsBuilding } from "react-icons/bs";
import Box from "../Box";
import Btn from "../Button/Btn";
import { FaGithub } from "react-icons/fa";
import { HiMoon, HiSun } from "react-icons/hi";
import Link from "next/link";

interface menuProp {
  themeState: string;
  setState: (e: boolean) => void;
}

function Menu({ themeState = "light", setState }: menuProp) {
  const defaultImg: string =
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";

  const animateContainer = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: "linear",
      },
    },
  };

  const animateItem = {
    hide: {
      opacity: 0,
      y: 30,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  const handleClick = (e: any) => {
    e.preventDefault;
    console.log("hii");
    setState(false);
  };

  return (
    <motion.menu
      variants={animateContainer}
      initial="hide"
      animate="show"
      className="w-full fixed top-0 h-screen overflow-y-auto overflow-x-hidden bg-very-light-blue/75 dark:bg-very-dark-blue/75 !backdrop-blur-md p-3 md:hidden z-40"
    >
      <ul className="grid grid-cols-2 grid-rows-5 text-center mt-16 text-very-light-blue gap-2 h-fit">
        <motion.li variants={animateItem} className="col-span-2 ">
          <Link
            href={"/"}
            aria-label="Go to home page"
            onClick={handleClick}
            className="!p-3 w-full block shadow-lg hover:bg-white hover:text-very-dark-blue rounded-2xl !py-10 text-dark-blue dark:text-white bg-very-light-blue  dark:bg-dark-blue"
          >
            Home
          </Link>
        </motion.li>
        <motion.li variants={animateItem}>
          <Link
            href={"/tools"}
            aria-label="Go to tools page"
            onClick={handleClick}
            className="!p-3 w-full block rounded-2xl !py-10 bg-dark-blue"
          >
            Tools
          </Link>
        </motion.li>
        <motion.li variants={animateItem} className="row-span-3">
          <Link
            href={"/about"}
            aria-label="Go to about page"
            onClick={handleClick}
            className="!p-3 w-full group grid justify-center hover:opacity-70 rounded-2xl !py-10 h-full bg-dark-blue"
          >
            About
            <BsBuilding className="text-6xl group:hover-scale-1.2" />
          </Link>
        </motion.li>
        <motion.li variants={animateItem} className="row-span-3">
          <Link
            href={"/tools"}
            aria-label="Go to dev page"
            onClick={handleClick}
            className="!p-3 w-full h-full block rounded-2xl !py-10 bg-very-dark-blue"
          >
            Dev
            <div className="flex border w-full mt-2 h-full bg-very-light-blue hover:bg-white rounded-xl items-center justify-center">
              <ProfileImg imgUrl={defaultImg} />
            </div>
          </Link>
        </motion.li>
        <motion.li
          variants={animateItem}
          className={
            "flex border bg-very-light-blue !text-very-dark-blue rounded-2xl"
          }
        >
          <Link
            href={"#footer"}
            aria-label="Go to footer"
            onClick={handleClick}
            className="!p-3 w-full block rounded-2xl !py-10 bg-very-light-blue !text-very-dark-blue"
          >
            More
          </Link>

          <div className="p-3 h-full">
            <button
              className=" mx-auto bg-white dark:bg-very-dark-blue rounded-2xl flex justify-center items-center w-full  text-2xl px-3 h-full dark:text-very-light-blue shadow-very-dark-blue group"
              onClick={() => {
                alert("activate dark mode");
              }}
            >
              {themeState === "dark" ? (
                <HiSun className="group-hover:scale-110" />
              ) : (
                <HiMoon className="group-hover:scale-110" />
              )}
            </button>
          </div>
        </motion.li>
      </ul>
      <motion.div variants={animateItem}>
        <Box>
          <h2 className="text-xl font-medium mb-5" id="orgInfo-menu">
            Codinasion
          </h2>
          <p className="tracking-wider" aria-labelledby="orgInfo-menu">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea
            et, perspiciatis sit optio quibusdam labore beatae officia deleniti
            possimus reiciendis alias tempora. Error quaerat rerum dolorum
            tempora et facilis.
          </p>
          <Btn
            href={"https://github.com/codinasion/"}
            target={"_blank"}
            text={"Join Codinasion"}
            ariaLabel={"Join Codinasion open source projects"}
            cssStyle={`w-full rounded-2xl mt-5`}
            icon={<FaGithub />}
          />
        </Box>
      </motion.div>
    </motion.menu>
  );
}

export default Menu;
