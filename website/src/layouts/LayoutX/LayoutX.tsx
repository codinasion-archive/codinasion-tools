import Footer from "@/components/Footer";
import Members from "@/components/Dev/Dev";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial/Testimonial";
import React, {useContext, useState} from "react";
import { motion, useScroll, useSpring, useUnmountEffect } from "framer-motion";

// google font
import { Rubik } from "@next/font/google";
import { TheContext } from "src/Context/Context";

const rubik = Rubik({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

interface Props {
  children?: React.ReactNode;
}
function LayoutX({ children }: Props) {
  const { scrollYProgress } = useScroll();
  const context = useContext<any>(TheContext)
  const [toolsData, setToolsData] = useState<null|string[]>(null)
  return (
    <TheContext.Provider value={{toolsData, setToolsData}}>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className={
          "h-2 w-full bg-gradient-to-tr dark:from-white dark:via-very-light-blue dark:to-very-light-blue from-very-dark-blue via-dark-blue to-dark-blue overflow-hidden fixed top-0 z-50"
        }
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      ></motion.div>
      <div
        id="home"
        className={`${rubik.className} bg-gradient-to-tr from-white via-very-light-blue to-very-light-blue dark:from-very-dark-blue dark:via-dark-blue dark:to-dark-blue`}
      >
        <Navbar />
        <main>{children}</main>

        <div className="relative z-20">
          <div className="grad-dark-01 absolute h-[95%] bottom-0 w-full mt-32"></div>
          <Testimonial />
          <Members />
          <Footer />{" "}
        </div>
      </div>
    </TheContext.Provider>
  );
}

export default LayoutX;
