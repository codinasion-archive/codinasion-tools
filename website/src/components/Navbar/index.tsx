import { Jura } from "@next/font/google";
import { HiMenuAlt3, HiMoon, HiSun } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import UrlBtn from "../Button/UrlBtn";
import { useEffect, useState } from "react";
import Btn from "../Button/Btn";
import Menu from "./Menu";

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
const navElementsList: navElementsType[] = [
  {
    text: "Home",
    url: "/",
    externalLink: false,
    cssStyle: "pl-1 border-b-2 hover:border-very-dark-blue",
  },
  {
    text: "Tools",
    url: "/tools",
    externalLink: false,
    cssStyle: "pl-1 border-b-2 hover:border-very-dark-blue",
  },
  {
    text: "About",
    url: "/about",
    externalLink: false,
    cssStyle: "pl-1 border-b-2 hover:border-very-dark-blue",
  },
  {
    text: "Github",
    url: "https://github.com/codinasion",
    externalLink: true,
    cssStyle: "pl-1 border-b-2 hover:border-very-dark-blue",
  },
];
export default function Navbar() {
  const [themeState, setThemeState] = useState<string>("light");
  const [menuState, setMenuState] = useState<boolean>(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setThemeState("dark");
    }
  }, [themeState]);

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
            cssStyle={"!px-2 bg-transparent border-0"}
            ariaLabel={'Search button click to write your query'}
          />
          <Btn
            text={""}
            ariaLabel={'Toggle menu button'}
            icon={menuState ? <IoClose /> : <HiMenuAlt3 />}
            cssStyle={"!px-2 border-0"}
            state={menuState}
            setState={setMenuState}
          />
        </div>
      </div>

      {/* menu section */}
      {menuState && <Menu themeState={themeState} />}

      <div className="w-full hidden md:flex justify-center items-center gap-2 text-lg">
        {navElementsList.map((item) => (
          <UrlBtn
            key={Math.random() * 500}
            ariaLabel={`Go to ${item.text} page`}
            name={item.text}
            href={item.url}
            cssStyle={item.cssStyle}
            target={item.externalLink ? "_blank" : "_top"}
          />
        ))}
        <span className="w-[2px] h-[30px] bg-very-dark-blue block mx-3 dark:bg-very-light-blue"></span>
        <button
          className="rounded-full text-2xl px-3 dark:text-very-light-blue shadow-very-dark-blue group"
          aria-label={`toggle dark mode ${themeState}`}
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

        <form
          action="#"
          className="group bg-white flex items-center h-[35px] rounded-full overflow-hidden"
          id="search-content"
        >
          <input
            type="search"
            placeholder="Search"

            className="px-3 h-full rounded-tl-full rounded-bl-full w-[150px]"
          />
          <button
            type="submit"
            className="px-3 group-hover:bg-very-light-blue h-full"
            aria-labelledby="search-content"
          >
            <FiSearch />
          </button>
        </form>
      </div>
    </nav>
  );
}
