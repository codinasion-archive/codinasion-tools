import React, { useContext, useEffect, useState } from "react";
import { Jura } from "@next/font/google";
import Btn from "../Button/Btn";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Copyrights from "./Copyrights";
import { basicSiteUrlTypes, socialTypes } from "src/Objs&Interfaces/Obj";
import { UrlTypes } from "src/Objs&Interfaces/Interface";
import { TheContext } from "src/Context/Context";

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura",
  weight: ["500"],
});

function Footer() {
  const context = useContext(TheContext);
  const [commonTools, setCommonTools] = useState<string[]>([]);
  useEffect(() => {
    if (context.commonTools.apiStatus) {
      setCommonTools(context.commonTools.apiData);
    }
  }, [context.commonTools.apiData, context.commonTools.apiStatus]);

  return (
    <div id="footer" className="w-full relative">
      <div className="relative overflow-hidden">
        <svg
          className="w-full relative top-2 z-10 scale-x-125"
          viewBox="0 0 1920 318"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 46L45.7143 53C91.4286 61 182.857 76 274.286 114C365.714 152 457.143 212 548.571 212C640 212 731.429 152 822.857 114C914.286 76 1005.71 61 1097.14 68C1188.57 76 1280 106 1371.43 129C1462.86 152 1554.29 167 1645.71 144C1737.14 121 1828.57 61 1874.29 30L1920 0V318H1874.29C1828.57 318 1737.14 318 1645.71 318C1554.29 318 1462.86 318 1371.43 318C1280 318 1188.57 318 1097.14 318C1005.71 318 914.286 318 822.857 318C731.429 318 640 318 548.571 318C457.143 318 365.714 318 274.286 318C182.857 318 91.4286 318 45.7143 318H0V46Z"
            fill="#DADEEA"
          />
        </svg>
        <svg
          className="w-full absolute top-0 scale-x-110"
          viewBox="0 0 1920 318"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 46L45.7143 53C91.4286 61 182.857 76 274.286 114C365.714 152 457.143 212 548.571 212C640 212 731.429 152 822.857 114C914.286 76 1005.71 61 1097.14 68C1188.57 76 1280 106 1371.43 129C1462.86 152 1554.29 167 1645.71 144C1737.14 121 1828.57 61 1874.29 30L1920 0V318H1874.29C1828.57 318 1737.14 318 1645.71 318C1554.29 318 1462.86 318 1371.43 318C1280 318 1188.57 318 1097.14 318C1005.71 318 914.286 318 822.857 318C731.429 318 640 318 548.571 318C457.143 318 365.714 318 274.286 318C182.857 318 91.4286 318 45.7143 318H0V46Z"
            fill="#fff"
          />
        </svg>
      </div>
      <footer
        className="bg-gradient-to-b from-very-light-blue to-white pb-32 pt-16 lg:pt-0"
        aria-labelledby="home"
        aria-label="site copyright privacy license top-tools subscribe"
      >
        <div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center gap-16 xl:gap-20 relative top-0 px-3">
          <h2
            className={`${jura.className} text-4xl lg:text-5xl xl:text-6xl text-center txt-gradient mb-3`}
          >
            codinasion-tools
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap gap-10 text-lg sm:text-base md:gap-20 justify-center w-full text-center sm:text-left">
            <div>
              <ul className="space-y-3 ">
                <li className="mb-4 font-bold pl-1">
                  <h2>Site tour</h2>
                </li>
                {basicSiteUrlTypes.map((item: UrlTypes) => (
                  <li key={item.id + "siteTour"}>
                    <Link
                      className="text-very-dark-blue text-left px-5 py-1 pl-2 border-b-2 sm:border-l-2 sm:border-b-0 border-transparent hover:border-black"
                      aria-label={`Go to ${item.text} page`}
                      href={item.url}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3 mt-5">
                <li className="mb-4 font-bold pl-1">
                  <h2 className="font-bold">Community</h2>
                </li>
                {socialTypes.map((item: UrlTypes) => (
                  <li key={item.id + "social"}>
                    <Link
                      className="text-very-dark-blue text-left px-5 py-1 pl-2 border-b-2 sm:border-l-2 sm:border-b-0 border-transparent hover:border-black"
                      aria-label={`Go to ${item.text} page`}
                      href={item.url}
                      target={"_blank"}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="space-y-3">
              <li className="mb-4 font-bold pl-1">
                <h2 className="font-bold">Top tools</h2>
              </li>

              {commonTools.length > 1 &&
                commonTools.slice(0, 6).map((item: any) => (
                  <li key={Math.random() * 50 + "common"}>
                    <Link
                      className="text-very-dark-blue truncate lg:w-[200px] xl:w-[300px] inline-block text-left px-5 py-1 pl-2 border-b-2 sm:border-l-2 sm:border-b-0 border-transparent hover:border-black"
                      aria-label={`Go to ${item.text} page`}
                      href={`/tools/${item.slug}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>

            <div className="w-full lg:w-fit order-first lg:order-last hidden lg:block">
              <div className="space-y-5 text-center lg:text-left mx-auto w-[400px]">
                <header title={"for developer"}>
                  <h2 className="font-bold text-lg">For Developers</h2>
                  <p>
                    Codinasion is awesome, If you are a programmer you must join
                    us.
                    {" It's"} an open-source org.
                  </p>
                </header>

                <Btn
                  href={"https://github.com/codinasion/"}
                  target={"_blank"}
                  ariaLabel={`Join Codinasion on Github it's an open-source`}
                  text={"Join Codinasion"}
                  icon={<FaGithub />}
                  cssStyle={`w-full py-3`}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Copyrights />
    </div>
  );
}
export default Footer;
