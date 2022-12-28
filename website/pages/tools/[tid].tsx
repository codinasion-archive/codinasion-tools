import Link from "next/link";
import Path from "../../src/components/Path";
import { BiFilterAlt } from "react-icons/bi";
import { MdDownload } from "react-icons/md";
import { FaGithub, FaRegCopy } from "react-icons/fa";
import { useState, useEffect } from "react";
import UrlBtn from "@/components/Button/UrlBtn";
import ProfileImg from "@/components/ProfileImg/ProfileImg";
import Btn from "@/components/Button/Btn";
import { useRouter } from "next/router";
import LayoutXComp from "@/layouts/LayoutX/LayoutXComp";
import Box from "@/components/Box";
import BasicCard from "@/components/ToolsCard/basicCard";
import { motion } from "framer-motion";
import { scrollX } from "src/AnimationVariants/animationVariants";

function Tid() {
  const router = useRouter();
  const tags = [
    "javascript",
    "object",
    "logic",
    "logic",
    "logic",
    "python",
    "adjust",
    "adjust",
    "adjust",
    "adjust",
    "adjust",
  ];
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);

  const defaultImg =
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";

  return (
    <>
      <div id="tools" className="w-full z-20 relative top-16 sm:top-32 p-3">
        <div className="max-w-[1200px] relative mx-auto grid lg:grid-cols-3 gap-3">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "linear", type: "tween" }}
            className="lg:col-span-2 col-span-3 relative bg-white dark:bg-very-dark-blue dark:text-white rounded-2xl overflow-hidden"
          >
            <div className="w-full p-4 text-xl bg-very-dark-blue flex justify-between items-center tracking-wider text-white">
              <span>
                <Path
                  path={`/tools/${router.isReady && router.query["tid"]}`}
                />
              </span>
            </div>
            <div className="space-y-5 p-3 ">
              <div>
                <h1 className="text-3xl font-semibold">Binary Convertor</h1>
                <hr />
                <p className="tracking-wider opacity-90">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti iste beatae provident sit hic veniam dicta vel
                  excepturi magnam cumque id laboriosam dolore eaque culpa,
                  aperiam rem unde nulla perferendis!
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium  py-2">Try now</h3>
                <p className="opacity-90">Live editor</p>
                <div className="live editor goes here w-full h-[500px] border dark:border-dark-blue mt-3 rounded-xl flex justify-center items-center">
                  <p>add Live editor here</p>
                </div>
              </div>
              <div className="live editor goes here w-full h-[500px] border mt-3 dark:border-dark-blue rounded-xl flex justify-center items-center">
                <p>pkg Detail here</p>
              </div>
              <Box>
                <h2 className="text-xl font-medium  py-3">Keywords</h2>
                <hr />
                <div className="flex flex-wrap gap-2 mt-5">
                  {tags.map((item) => (
                    <UrlBtn
                      href={`/tools?key=${item}`}
                      ariaLabel={`Get more result about ${item}`}
                      key={Math.random() * 500}
                      cssStyle=" hover:opacity-75 p-[2px] px-3 rounded-full bg-very-light-blue dark:!text-very-dark-blue"
                      name={item}
                    />
                  ))}
                </div>
              </Box>
            </div>
          </motion.div>

          {/* sidebar start */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "linear", type: "tween" }}
            className={"col-span-3 lg:col-span-1"}
          >
            <div
              className={`rounded-2xl overflow-hidden !w-full relative z-20 h-fit mt-10 lg:mt-0`}
            >
              <span className="w-full flex items-center justify-between rounded-2xl lg:rounded-none bg-very-dark-blue p-4 text-lg text-white">
                {" > npm i @tailwindcss/aspect-ratio"}
                <FaRegCopy
                  className="relative scale-125 cursor-pointer"
                  onClick={() => setToggleFilter(!toggleFilter)}
                />
              </span>
              <div>
                <Box>
                  <h3 className="text-xl font-medium tran">Repository</h3>
                  <Link
                    href={"github.com/tailwindlabs/tailwindcss-aspect-ratio"}
                    className={"font-light truncate block mt-2 max-w-[300px] "}
                  >
                    github.com/tailwindlabs/tailwindcss-aspect-ratio
                  </Link>
                  <div className="space-y-5">
                    <div className="mt-5">
                      <h3 className="text-xl font-medium tran">Download</h3>
                      <p className="border-b-[3px] p-1 py-2 border-very-light-blue relative dark:border-dark-blue after:w-[60%] after:border-[2px] after:border-dark-blue dark:after:border-very-light-blue/70 after:absolute after:left-0 after:-bottom-[3px]">
                        1214123
                      </p>
                    </div>
                    <div className="flex justify-between mt-5 gap-2">
                      <h3 className="w-full p-2 flex justify-between items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
                        Version <span>0.4.2</span>
                      </h3>
                      <h3 className="w-full p-2 flex justify-between items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
                        License <span>MIT</span>
                      </h3>
                    </div>
                    <h3 className="w-full p-2 flex justify-between items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
                      Unpacked Size <span>17KB</span>
                    </h3>{" "}
                    <h3 className="w-full p-2 flex justify-between items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
                      Total File <span>9</span>
                    </h3>{" "}
                    <div className="w-full p-2 items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
                      <h3 className="text-xl font-medium tran">
                        Last published
                      </h3>
                      <p className="p-1 py-2">4 month ago</p>
                    </div>
                  </div>
                </Box>

                <Box>
                  <h2 className="text-xl font-medium">Collebrator</h2>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {tags.map((item) => (
                      <ProfileImg
                        imgUrl={defaultImg}
                        key={Math.random() * 600}
                      />
                    ))}
                    <Link
                      href="#"
                      className="text-3xl animate-pulse flex items-end justify-center aspect-square rounded-full p-2 w-16 sm:w-20"
                    >
                      .....
                    </Link>
                  </div>
                  <Btn
                    href={"https://github.com/codinasion"}
                    target="_blank"
                    text={"Collaborate"}
                    ariaLabel={`Collaborate with us on Github`}
                    cssStyle={`w-full rounded-2xl mt-5`}
                    icon={<FaGithub />}
                  />
                </Box>
                <Box>
                  <h2 className="text-xl font-medium mb-3">Binary convertor</h2>
                  <p>
                    Lorem ipsum dolor sit amat consectetur adipisicing elit.
                    Rerun ea et.
                  </p>
                  <Btn
                    href={"https://github.com/codinasion"}
                    ariaLabel={`download and install ${"Binary Convertor"}`}
                    text={"Install"}
                    cssStyle={`w-full rounded-2xl mt-5`}
                    icon={<MdDownload />}
                  />
                </Box>
              </div>
            </div>
          </motion.div>
          <div className="col-span-3 lg:col-span-2">
            <Box>
              <h2 className="text-xl font-medium  py-3">Comment box</h2>
              <hr />
              <div className="flex flex-wrap gap-2 mt-5">Add comment box</div>
            </Box>
          </div>
        </div>
        <div
          id="tools"
          className="relative overflow-hidden mt-16 max-w-[1200px] grid grid-cols-1 md:grid-cols-2 mx-auto !justify-center !items-center gap-3"
        >
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ amount: 0.8, once: false }}
            variants={scrollX(-50)}
          >
            <BasicCard
              title="react-js"
              repoUrl="/tools/react-js"
              download={997213}
            />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ amount: 0.8, once: false }}
            variants={scrollX(50)}
          >
            <BasicCard
              title="tailwindcss"
              repoUrl="/tools/tailwindcss"
              download={329342}
            />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ amount: 0.8, once: false }}
            variants={scrollX(-50)}
          >
            <BasicCard
              title="next-js"
              repoUrl="/tools/next-js"
              download={44233}
            />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ amount: 0.8, once: false }}
            variants={scrollX(50)}
          >
            <BasicCard
              title="material-ui"
              repoUrl="/tools/meterial-ui"
              download={56123}
            />
          </motion.div>
        </div>
        <div className="py-32 "></div>
      </div>
      <LayoutXComp
        pageNavigator={["home", "tools", "users", "dev", "footer"]}
      />
    </>
  );
}

export default Tid;
