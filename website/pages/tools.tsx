import { useContext } from "react";
import Link from "next/link";
import ToolsCard from "../src/components/ToolsCard";
import Path from "../src/components/Path";
import { BiFilterAlt } from "react-icons/bi";
import { useState, useEffect, useMemo } from "react";
import { FaGithub } from "react-icons/fa";
import ProfileImg from "@/components/ProfileImg/ProfileImg";
import Btn from "@/components/Button/Btn";
import Pagination from "@/components/Pagination";
import LayoutXComp from "@/layouts/LayoutX/LayoutXComp";
import Box from "@/components/Box";
import { motion } from "framer-motion";
import { TheContext } from "src/Context/Context";
import { useRef } from "react";

interface devType {
  avatar_url: string;
  html_url: string;
  name: string;
}

function ToolsLayout({ data, toolsStatus }: any) {
  const context = useContext(TheContext);
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [toolsPage, setToolsPage] = useState<any>(1);
  const toolsData = useRef([]);
  const [devs, setDevs] = useState<any>(null);

  const toolsMemo = useMemo(() => {
    setDevs(context.devs.devs);
    if (toolsStatus) {
      if (toolsPage <= 1) {
        toolsData.current = data.slice(0, 10);
      } else {
        toolsData.current = data.slice(10 * (toolsPage - 1), 10 * toolsPage);
      }
      return (
        toolsData.current &&
        toolsData.current?.map((item: any) => (
          <ToolsCard
            key={Math.random() * 500 + "tools_page"}
            title={item.title}
            desc={item.description}
            views={item.views}
            docsUrl={`tools/${item.slug}`}
            tags={item.category}
          />
        ))
      );
    }
  }, [toolsPage]);

  useEffect(() => {
    const fetchDevFun = async () => {
      const fetchDev = await fetch(
        "https://api.github.com/orgs/codinasion/members?per_page=30"
      );
      const data = await fetchDev.json();
      let fetchStatus = false;
      if (fetchDev.status === 200) {
        fetchStatus = true;
        context.setDevs({ devs: data });
      } else {
      }
    };
    if (context.devs.devs.length === 0) {
      fetchDevFun();
    }
  }, []);

  return (
    toolsStatus && (
      <>
        <div
          id="tools"
          className="w-full z-20 relative top-16 sm:top-32 px-0 sm:p-3"
        >
          <div className="max-w-[1200px] relative mx-auto grid lg:grid-cols-3 gap-3">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: "linear", type: "tween" }}
              className="col-span-2 relative bg-white dark:bg-very-dark-blue rounded-2xl overflow-hidden"
            >
              <div className="w-full p-4 text-xl bg-very-dark-blue flex justify-between items-center tracking-wider text-white">
                <span>
                  <Path path="tools/" />
                </span>
                <BiFilterAlt
                  className="lg:hidden cursor-pointer"
                  onClick={() => setToggleFilter(!toggleFilter)}
                />
              </div>
              <div className="space-y-3  p-3 ">
                <>{toolsMemo}</>
                <Pagination
                  totalPage={Math.round(data.length / 10)}
                  setPage={setToolsPage}
                />
              </div>
            </motion.div>

            {/* sidebar start */}
            <div
              style={{
                opacity: toggleFilter ? 100 : 0,
                transform: `scale(${toggleFilter ? 1 : 0})`,
              }}
              className={`rounded-2xl lg:!opacity-100 overflow-hidden absolute lg:!scale-100 origin-top-right lg:relative sm:w-2/3 lg:w-full right-0 bg-white dark:bg-dark-blue lg:bg-transparent z-20 h-fit`}
            >
              <span className="w-full flex items-center justify-between bg-very-dark-blue p-4 text-xl text-white">
                Codinasion Vision{" "}
                <BiFilterAlt
                  className="relative scale-125 cursor-pointer"
                  onClick={() => setToggleFilter(!toggleFilter)}
                />
              </span>
              <div className="p-2 lg:p-0">
                {/* <Box>
                  <h2 className="text-xl font-medium">Category</h2>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {tags.map((item) => (
                      <span
                        key={Math.random() * 500}
                        className=" hover:opacity-75 p-[2px] px-3 cursor-pointer rounded-full dark:text-very-dark-blue bg-very-light-blue"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Box>
                <Box>
                  <h2 className="text-xl font-medium">Top tools</h2>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {tags.map((item) => (
                      <UrlBtn
                        ariaLabel={`More tools related ${item}`}
                        href={`/tools/${item}`}
                        key={Math.random() * 500}
                        cssStyle=" hover:opacity-75 p-[2px] px-3 rounded-full bg-very-light-blue dark:!text-very-dark-blue"
                        name={item}
                      />
                    ))}
                  </div>
                </Box> */}
                {/* {
                  // console.log(devs[0])
                } */}
                <Box>
                  <h2 className="text-xl font-medium">Collebrator</h2>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {
                      // console.log(devs)
                      devs&&devs.slice(0, 10).map((item: devType) => (
                        <ProfileImg
                          key={Math.random() * 50 + "devs"}
                          profileUrl={item.html_url}
                          name={item.name}
                          imgUrl={item.avatar_url}
                        />
                      ))
                    }
                    <Link
                      href="https://github.com/orgs/codinasion/teams/members/members"
                      target={"_blank"}
                      className="text-3xl animate-pulse flex items-end justify-center aspect-square rounded-full p-2 w-16 sm:w-20"
                    >
                      .....
                    </Link>
                  </div>
                  <Btn
                    ariaLabel="Collebrate to open-tools with us on Github"
                    href={"https://github.com/codinasion"}
                    target="_blank"
                    text={"Collebrate"}
                    cssStyle={`w-full rounded-2xl mt-5`}
                    icon={<FaGithub />}
                  />
                </Box>
                <Box>
                  <h2 className="text-xl font-medium mb-5">Codinasion</h2>
                  <p className="tracking-wider">
                    Codinasion is open-source organization. We provide solution
                    related to programing/coding and tools which is very useful
                    in real life coding. codinasion provide{" "}
                    <span className="px-2 rounded-full bg-[gold] border">
                      Good first issue
                    </span>{" "}
                    for new developers.
                  </p>
                  <Btn
                    ariaLabel="Join Codinasion open source project"
                    href={"https://github.com/codinasion/open-tools"}
                    target="_blank"
                    text={"Join Codinasion"}
                    cssStyle={`w-full rounded-2xl mt-5`}
                    icon={<FaGithub />}
                  />
                </Box>
              </div>
            </div>
          </div>
          <div className="py-32 "></div>
        </div>
        <LayoutXComp
          pageNavigator={["home", "tools", "users", "dev", "footer"]}
        />
      </>
    )
  );
}

export default ToolsLayout;
export const getServerSideProps = async () => {
  try {
    const res = await fetch(
      "https://opentools.pythonanywhere.com/api/tools-data/?format=json"
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
