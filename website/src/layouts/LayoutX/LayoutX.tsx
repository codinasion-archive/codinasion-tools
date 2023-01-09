import Footer from "@/components/Footer";
import Members from "@/components/Dev/Dev";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial/Testimonial";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { motion, useScroll } from "framer-motion";

// google font
import { Rubik } from "@next/font/google";
import { TheContext } from "src/Context/Context";
import SearchBox from "@/components/SearchBox/SearchBox";

const rubik = Rubik({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

interface uStateType {
  apiStatus: boolean;
  apiData: string[];
}
interface Props {
  children?: React.ReactNode;
}
function LayoutX({ children }: Props) {
  const { scrollYProgress } = useScroll();
  const [theme, setTheme] = useState<string>("light");
  const [isSearchBox, setSearchBox] = useState<boolean>(false);
  const [devs, setDevs] = useState<uStateType>({
    apiStatus: false,
    apiData: [],
  });
  const [commonTools, setCommonTools] = useState<uStateType>({
    apiStatus: false,
    apiData: [],
  });
  const [toolsData, setToolsData] = useState<uStateType>({
    apiStatus: false,
    apiData: [],
  });
  const [testimonialData, setTestimonialData] = useState<uStateType>({
    apiStatus: false,
    apiData: [],
  });

  useLayoutEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <TheContext.Provider
      value={{
        devs,
        setDevs,
        toolsData,
        setToolsData,
        theme,
        setTheme,
        testimonialData,
        setTestimonialData,
        commonTools,
        setCommonTools,
      }}
    >
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className={"h-2 w-full  overflow-hidden fixed top-0 z-50"}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      ></motion.div>
      <div
        id="home"
        className={`${rubik.className} bg-gradient-to-tr from-white via-very-light-blue to-very-light-blue dark:from-very-dark-blue dark:via-dark-blue dark:to-dark-blue`}
      >
        <Navbar setSearchBox={setSearchBox} />
        {isSearchBox && <SearchBox close={setSearchBox} />}
        <main>{children}</main>

        <div className="relative z-10">
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
