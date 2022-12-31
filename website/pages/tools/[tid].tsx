import Link from "next/link";
import Path from "../../src/components/Path";
import { BiFilterAlt } from "react-icons/bi";
import { MdDownload } from "react-icons/md";
import { FaGithub, FaRegCopy } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import UrlBtn from "@/components/Button/UrlBtn";
import ProfileImg from "@/components/ProfileImg/ProfileImg";
import Btn from "@/components/Button/Btn";
import { useRouter } from "next/router";
import LayoutXComp from "@/layouts/LayoutX/LayoutXComp";
import Box from "@/components/Box";
import BasicCard from "@/components/ToolsCard/basicCard";
import { motion } from "framer-motion";
import { scrollX } from "src/AnimationVariants/animationVariants";
import reactMarkdown from "react-markdown";
import { Javascript } from "@mui/icons-material";
import AlertBox from "@/components/AlertBox/AlertBox";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NotFound from "pages/404";

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
const defaultImg =
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";

interface alertType {
  title: string;
  message: string;
}

function Tid({ data, toolsStatus }: any) {
  const [activeLang, setLang] = useState<string>("javascript");
  const [alertState, setAlertState] = useState<any | alertType>(null);
  // console.log(data);
  const router = useRouter();
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const dateRef = useRef<Date>();
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    if (toolsStatus) {
      const last_updated = new Date(data.last_updated);
      dateRef.current = last_updated;
      // console.log(date, '------')
    }
  }, []);
  return (
    toolsStatus ? (
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
              <div className="space-y-5 lg:px-4 p-3 ">
                <div className="space-y-3">
                  <h1 className="text-3xl font-semibold">{data.title}</h1>
                  <hr />
                  <p>{data.description}</p>
                </div>
                <div>
                  {/* lang switch btn start */}
                  <div className="top-0 border-b">
                    <button
                      onClick={() => {
                        setLang("javascript");
                      }}
                      style={{
                        borderBottomWidth:
                          activeLang === "javascript" ? "3px" : "0",
                        opacity: activeLang === "javascript" ? 1 : 0.6,
                      }}
                      className="p-2 px-3 dark:border-white border-black rounded-lg rounded-b-none"
                    >
                      Javascript
                    </button>
                    <button
                      onClick={() => {
                        setLang("typescript");
                      }}
                      style={{
                        borderBottomWidth:
                          activeLang === "typescript" ? "3px" : "0",
                        opacity: activeLang === "typescript" ? 1 : 0.6,
                      }}
                      className="p-2 px-3 dark:border-white border-black rounded-lg rounded-b-none"
                    >
                      Typescript
                    </button>
                    <button
                      onClick={() => {
                        setLang("python");
                      }}
                      style={{
                        borderBottomWidth:
                          activeLang === "python" ? "3px" : "0",
                        opacity: activeLang === "python" ? 1 : 0.6,
                      }}
                      className="p-2 px-3 dark:border-white border-black rounded-lg rounded-b-none"
                    >
                      Python
                    </button>
                  </div>
                  {/* lang switch btn end */}

                  {activeLang == "javascript" && (
                    <>
                      <div>
                        <h3 className="text-xl font-medium  py-2">Try now</h3>
                        <p className="opacity-90">Live editor</p>
                        <div className="live editor goes here w-full mt-3 rounded-xl flex justify-center items-center">
                          <iframe
                            src="https://codesandbox.io/embed/convert-binary-to-decimal-by-open-tools-hl9hx1?file=/index.js?codemirror=1&highlights=5,12,13,14&fontsize=12&forcerefresh=1&view=split&autoresize&hidenavigation=1&hidedevtools=0"
                            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                            className="w-full rounded-xl h-[500px] border-2 shadow-2xl dark:shadow-dark-blue dark:border-dark-blue"
                            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                          ></iframe>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl mt-5 shadow-xl dark:shadow-dark-blue bg-white dark:bg-black">
                        <div className="py-5">
                          <h2 className="text-2xl font-medium py-3">
                            Installation
                          </h2>
                          <hr />
                          <div className="mt-3">
                            <div className="p-3 mt-5 rounded-xl shadow-xl dark:shadow-dark-blue bg-white dark:bg-black">
                              <code className="tracking-wider">
                                npm install open-tools
                              </code>
                            </div>
                          </div>
                        </div>
                        <h2 className="text-2xl font-medium py-3">Code</h2>
                        <hr />
                        <div className="mt-5">
                          <code className="tracking-wider">
                            <ReactMarkdown>{data.markdown}</ReactMarkdown>
                          </code>
                        </div>
                      </div>
                    </>
                  )}

                  {activeLang == "typescript" && (
                    <>
                      <div>
                        <h3 className="text-xl font-medium  py-2">Try now</h3>
                        <p className="opacity-90">Live editor</p>
                        <div className="live editor goes here w-full mt-3 rounded-xl flex justify-center items-center">
                          <iframe
                            src="https://codesandbox.io/embed/convert-binary-to-decimal-by-open-tools-hl9hx1?file=/index.ts?codemirror=1&highlights=5,12,13,14&fontsize=12&forcerefresh=1&view=split&autoresize&hidenavigation=1&hidedevtools=0"
                            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                            className="w-full rounded-xl h-[500px] border-2 shadow-2xl dark:shadow-dark-blue dark:border-dark-blue"
                            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                          ></iframe>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl mt-5 shadow-xl dark:shadow-dark-blue bg-white dark:bg-black">
                        <h2 className="text-2xl font-medium py-3">Code</h2>
                        <hr />
                        <div className="mt-5">
                          <code className="tracking-wider">
                            <ReactMarkdown>{data.markdown}</ReactMarkdown>
                          </code>
                        </div>
                      </div>
                      <div className="py-5">
                        <h2 className="text-2xl font-medium py-3">
                          Installation
                        </h2>
                        <hr />
                        <div className="mt-3">
                          <div className="p-3 mt-5 rounded-xl shadow-xl dark:shadow-dark-blue bg-white dark:bg-black">
                            <code className="tracking-wider">
                              npm install open-tools
                            </code>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {activeLang == "python" && (
                    <>
                      <div className="p-3 rounded-xl shadow-xl dark:shadow-dark-blue bg-white dark:bg-black">
                        <code className="tracking-wider mt-5">
                          In progress...
                          {/* <MarkdownRenderer
                            markdown={data.markdown}
                          ></MarkdownRenderer> */}
                        </code>
                      </div>
                      <div className="py-5">
                        <h2 className="text-2xl font-medium py-3">
                          Installation
                        </h2>
                        <hr />
                        <div className="mt-3">
                          <div className="p-3 mt-5 rounded-xl shadow-xl dark:shadow-dark-blue bg-white dark:bg-black">
                            <code className="tracking-wider">
                              pip install opentoolshub{" "}
                            </code>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <Box>
                  <h2 className="text-xl font-medium  py-3">Keywords</h2>
                  <hr />
                  <div className="flex flex-wrap gap-2 mt-5">
                    {data.category.map((item: any) => (
                      <>
                        <Link href={`/tools?category=${item.title}`}></Link>
                        <span className=" hover:opacity-75 p-[2px] px-3 rounded-full bg-very-light-blue dark:!text-very-dark-blue">
                          {item.title}
                        </span>
                      </>
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
                  {`> `}
                  {activeLang == "python"
                    ? "pip install opentoolshub"
                    : "npm install open-tools"}
                  {/* <FaRegCopy
                    className="relative scale-125 cursor-pointer"
                  /> */}
                </span>
                <div>
                  <Box>
                    <h3 className="text-xl font-medium tran">Repository</h3>
                    <Link
                      href={"https://github.com/codinasion/open-tools"}
                      className={
                        "font-light truncate block mt-2 max-w-[300px] "
                      }
                    >
                      https://github.com/codinasion/open-tools
                    </Link>
                    <div className="space-y-5">
                      <div className="mt-5">
                        <h3 className="text-xl font-medium tran">Download</h3>
                        <p className="border-b-[3px] p-1 py-2 border-very-light-blue relative dark:border-dark-blue after:w-[60%] after:border-[2px] after:border-dark-blue dark:after:border-very-light-blue/70 after:absolute after:left-0 after:-bottom-[3px]">
                          {data.used}
                        </p>
                      </div>
                      <div className="flex justify-between mt-5 gap-2">
                        <h3 className="w-full p-2 flex justify-between items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
                          Version <span>0.0.3</span>
                        </h3>
                        <h3 className="w-full p-2 flex justify-between items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
                          License <span>MIT</span>
                        </h3>
                      </div>
                      <h3 className="w-full p-2 flex justify-between items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
                        Unpacked Size <span>20.6 kB</span>
                      </h3>{" "}
                      <h3 className="w-full p-2 flex justify-between items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
                        Total File <span>60</span>
                      </h3>{" "}
                      <div className="w-full p-2 items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
                        <h3 className="text-xl font-medium tran">
                          Last published
                        </h3>
                        <p className="p-1 py-2">
                          {dateRef.current !== undefined &&
                            dateRef.current.getDay()}{" "}
                          {dateRef.current !== undefined &&
                            months[dateRef.current.getDay()]}{" "}
                          {dateRef.current !== undefined &&
                            dateRef.current.getFullYear()}
                        </p>
                      </div>
                    </div>
                  </Box>

                  <Box>
                    <h2 className="text-xl font-medium">Collebrator</h2>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {data.contributors.map((item: any) => (
                        <div
                          key={Math.random() * 50 + "contributer"}
                          className="flex items-center gap-5"
                        >
                          <ProfileImg
                            imgUrl={defaultImg}
                            // key={Math.random() * 600}
                          />
                          <h2 className="text-lg font-bold">{item.username}</h2>
                        </div>
                      ))}
                    </div>
                    <Btn
                      href={"https://github.com/codinasion/open-tools"}
                      target="_blank"
                      text={"Collaborate"}
                      ariaLabel={`Collaborate with us on Github`}
                      cssStyle={`w-full rounded-2xl mt-5`}
                      icon={<FaGithub />}
                    />
                  </Box>
                  <Box>
                    <h2 className="text-xl font-medium mb-3">Open tools</h2>
                    <p>
                      Open tools is a npm/pip pkg. Open tools provide a hundreds
                      of basic and advanced tools.
                    </p>
                    <Link
                      href={
                        "https://github.com/codinasion/open-tools/archive/refs/heads/master.zip"
                      }
                      download
                      className="bg-very-dark-blue dark:bg-white dark:text-very-dark-blue dark:hover:bg-very-dark-blue hover:text-very-dark-blue hover:bg-white border-2 dark:hover:text-white flex items-center justify-center gap-2 text-white p-2 mt-3 text-center text-xl rounded-xl"
                      onClick={(e) => {
                        e.preventDefault;
                        setAlertState({
                          title: "Download",
                          message: "Download has started...",
                        });
                      }}
                    >
                      <MdDownload />
                      Install
                    </Link>
                  </Box>
                </div>
              </div>
            </motion.div>
            {/* <div className="col-span-3 lg:col-span-2">
              <Box>
                <h2 className="text-xl font-medium  py-3">Comment box</h2>
                <hr />
                <div className="flex flex-wrap gap-2 mt-5">Add comment box</div>
              </Box>
            </div> */}
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
        {alertState && (
          <AlertBox alertData={alertState} close={setAlertState} />
        )}
        <LayoutXComp
          pageNavigator={["home", "tools", "users", "dev", "footer"]}
        />
      </>
    ):<NotFound/>
  );
}

export default Tid;
export const getServerSideProps = async (context: any) => {
  try {
    const res = await fetch(
      `https://opentools.pythonanywhere.com/api/tools-data/${context.params.tid}/?format=json`
    );
    const data = await res.json();

    return (
      res.status === 200 && {
        props: {
          toolsStatus: true,
          data,
        },
      }
    );
  } catch (error) {
    return {
      props: {
        toolsStatus: false,
        data: null,
      },
    };
  }
};
