import { Content, Jura } from "@next/font/google";
import { HiMenuAlt3, HiMoon, HiSun } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import UrlBtn from "../Button/UrlBtn";
import { useEffect, useState, useContext, useMemo } from "react";
import Btn from "../Button/Btn";
import Menu from "./Menu";
import Link from "next/link";
import { TheContext } from "src/Context/Context";
import { useRouter } from "next/router";

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura",
  weight: ["700"],
});

interface navElementsType {
  text: string;
  url: string;
  externalLink: boolean;
  cssStyle?: string;
}
[];

interface navbarProp {
  setSearchBox: (e: boolean) => void;
}
export default function Navbar({ setSearchBox }: navbarProp) {
  const [themeState, setThemeState] = useState<string>("light");
  const [menuState, setMenuState] = useState<boolean>(false);
  const context = useContext(TheContext);
  const router = useRouter();

  const handleTheme = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setThemeState("light");
      context.setTheme("light");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setThemeState("dark");
      context.setTheme("dark");
    }
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setThemeState("dark");
      context.setTheme("dark");
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full pt-3 z-40 flex gap-3 flex-col items-center justify-center font-extrabold ${jura.className} backdrop-blur-md`}
    >
      <div className="flex items-center z-50 relative w-full p-3 !justify-between text-2xl text-white">
        <div></div>
        <UrlBtn
          name="Open-tools"
          href="/"
          ariaLabel="open-tools codinasion program"
          cssStyle="hover:!border-transparent text-3xl  dark:txt-gradient-light"
        />
        <div></div>
        <div className="flex absolute right-3 md:hidden items-center gap-2">
          <Btn
            text={""}
            icon={<FiSearch />}
            cssStyle={"!px-2 bg-transparent border-0 hover:shadow-xl"}
            ariaLabel={"Search button click to write your query"}
            setState={setSearchBox}
          />
          <Btn
            text={""}
            ariaLabel={"Toggle menu button"}
            icon={menuState ? <IoClose /> : <HiMenuAlt3 />}
            cssStyle={"!px-2 border-0"}
            state={menuState}
            setState={setMenuState}
          />
        </div>
      </div>

      {/* menu section */}
      {menuState && <Menu toggleTheme={handleTheme} setState={setMenuState} />}

      <div className="w-full hidden md:flex justify-center items-center gap-2 text-lg">
        <Link
          className="text-very-dark-blue py-2 px-3 border-b-2 border-transparent hover:border-white dark:text-white drop-shadow-lg text-shadow-II"
          aria-label="Go to home page"
          href={"/"}
          style={{
            borderColor: router.route === "/" ? "white" : "transparent",
          }}
        >
          Home
        </Link>
        <Link
          className="text-very-dark-blue py-2 px-3 border-b-2 border-transparent hover:border-white dark:text-white text-shadow-II"
          aria-label="Go to tools page"
          href={"/tools"}
          style={{
            borderColor: router.route === "/tools" ? "white" : "transparent",
          }}
        >
          Tools
        </Link>
        <Link
          className="text-very-dark-blue py-2 px-3 border-b-2 border-transparent hover:border-white dark:text-white text-shadow-II"
          aria-label="Go to about page"
          href={"/about"}
          style={{
            borderColor: router.route === "/about" ? "white" : "transparent",
          }}
        >
          About
        </Link>
        <Link
          className="text-very-dark-blue py-2 px-3 border-b-2 border-transparent hover:border-white dark:text-white text-shadow-II"
          aria-label="Go to github page"
          target={"_blank"}
          href={"https://github.com/codinasion/open-tools"}
        >
          GitHub
        </Link>

        <span className="w-[2px] h-[30px] bg-very-dark-blue block mx-3 dark:bg-very-light-blue"></span>
        <button
          className="rounded-full text-2xl px-3 dark:text-very-light-blue shadow-very-dark-blue group"
          aria-label={`toggle theme mode ${themeState}`}
          onClick={() => handleTheme()}
        >
          {themeState === "dark" ? (
            <HiSun className="group-hover:scale-110" />
          ) : (
            <HiMoon className="group-hover:scale-110" />
          )}
        </button>

        <button
          type="button"
          className="group-hover:bg-very-light-blue h-full w-48 bg-white ring-2 ring-transparent dark:focus:ring-very-light-blue shadow-sm  focus:ring-very-dark-blue rounded-full border p-1 px-3 flex items-center justify-between"
          aria-labelledby="search-content"
          onClick={() => {
            setSearchBox(true);
          }}
        >
          Search
          <FiSearch />
        </button>
      </div>
    </nav>
  );
}
