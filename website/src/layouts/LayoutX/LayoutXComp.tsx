import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { scrollScale } from "src/AnimationVariants/animationVariants";

interface pageNavigatorProp {
  pageNavigator: string[];
}

function LayoutXComp({
  pageNavigator = ["tools", "users", "dev", "footer"],
}: pageNavigatorProp) {
  const [pagePos, setPagePos] = useState<string>("footer");

  return (
    <>
      <div className="xl:flex items-center justify-center hidden flex-col space-y-[100%] z-40 1400:left-[5%] fixed left-[1%] bottom-[5%]">
        <div className="grid items-center text-xl justify-center gap-2">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ amount: 0.8, once: false }}
            variants={scrollScale(0.5)}
          >
            <Link
              href={"https://github.com/codinasion/"}
              target="_blank"
              className={
                "glow-dark-on bg-very-light-blue w-10 aspect-square rounded-full  border-2 flex justify-center items-center"
              }
            >
              <FaGithub />
            </Link>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ amount: 0.8, once: false }}
            variants={scrollScale(0.5)}
          >
            <Link
              href={"https://twitter.com"}
              target="_blank"
              className={
                "glow-dark-on  w-10 aspect-square rounded-full  border-2 flex bg-very-light-blue justify-center items-center"
              }
            >
              <FaTwitter />
            </Link>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ amount: 0.8, once: false }}
            variants={scrollScale(0.5)}
          >
            <Link
              href={"https://discord.com"}
              target="_blank"
              className={
                "glow-dark-on bg-very-light-blue w-10 aspect-square rounded-full  border-2 flex justify-center items-center"
              }
            >
              <FaDiscord />
            </Link>
          </motion.div>
        </div>
        <span className="h-[40vh] border border-white "></span>
      </div>
      <div className="space-y-[100%] z-40 fixed 1400:right-[5%] right-[1%] hidden xl:block bottom-[5%]">
        <div className="grid items-center justify-center gap-2">
          {pageNavigator.map((item) => (
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              viewport={{ amount: 0.8, once: false }}
              variants={scrollScale(0.5)}
              key={Math.random() * 500}
            >
              <Link
                href={`#${item}`}
                className={
                  "glow-dark-on hover:bg-very-dark-blue block w-6 aspect-square rounded-full border-very-light-blue border-2 bg-white"
                }
              ></Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ amount: 0.8, once: false }}
          variants={scrollScale(0.5)}
        >
          <Link
            href={`#${pagePos}`}
            onClick={() =>
              pagePos === "home" ? setPagePos("footer") : setPagePos("home")
            }
            className="backdrop-blur-sm w-8 py-7 block rounded-full border-2 group border-white z-50"
          >
            {pagePos === "footer" ? (
              <HiOutlineArrowNarrowDown
                className={`mx-auto scale-[200%] group-hover:scale-[250%] top-0 group-hover:top-9 relative`}
              />
            ) : (
              <HiOutlineArrowNarrowDown
                className={`mx-auto scale-[200%] group-hover:scale-[250%] rotate-180 top-0 group-hover:-top-9 relative`}
              />
            )}
          </Link>
        </motion.div>
      </div>

      <Link
        href={`#${pagePos}`}
        onClick={() =>
          pagePos === "home" ? setPagePos("footer") : setPagePos("home")
        }
        className="fixed lg:hidden left-1/2 backdrop-blur-sm -translate-x-1/2 bottom-10 p-2 group w-8 py-7 flex justify-center items-center rounded-full border-2 group border-white z-30"
      >
        {pagePos === "footer" ? (
          <HiOutlineArrowNarrowDown
            className={`mx-auto scale-[200%] group-hover:scale-[250%] top-0 group-hover:top-9 relative `}
          />
        ) : (
          <HiOutlineArrowNarrowDown
            className={`mx-auto scale-[200%] group-hover:scale-[250%] rotate-180 top-0 group-hover:-top-9 relative`}
          />
        )}
      </Link>
    </>
  );
}

export default LayoutXComp;
