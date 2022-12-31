import React, { useState, useEffect } from "react";
import { Jura } from "@next/font/google";
import Btn from "../src/components/Button/Btn";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { scrollScale } from "src/AnimationVariants/animationVariants";
import UrlBtn from "@/components/Button/UrlBtn";
import { useRouter } from "next/router";

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura",
  weight: ["500"],
});

function NotFound() {
  const [timer, setTimer] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const createTimer = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    timer === 0 && clearTimeout(createTimer);
    timer === 0 && router.push("/");
  }, [timer]);

  return (
    <motion.div
      id="home"
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
        {""}
        <span className="block"> 404</span>{" "}
      </motion.h1>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={scrollScale(1.2)}
        viewport={{ amount: 0.6, once: false }}
        className="max-w-[500px] text-lg sm:text-xl font-normal tracking-wide text-center text-very-dark-blue dark:text-very-light-blue"
      >
        We looked all over, but that page seems to have gotten away from us. Try
        <UrlBtn
          ariaLabel="Go to tools page"
          href="tools"
          name="Tools page"
          cssStyle="border-b-2 !border-black"
        />
      </motion.p>
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={scrollScale(1.2)}
        viewport={{ amount: 0.6, once: false }}
      >
        <Btn
          ariaLabel="Go to home page"
          href={"/"}
          text={"Redirecting to home page"}
          icon={<span className="shadow-xl px-2 py-1 rounded-xl">{timer}</span>}
        />
      </motion.div>
    </motion.div>
  );
}

export default NotFound;
