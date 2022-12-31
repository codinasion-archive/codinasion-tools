import { useContext } from "react";
import Link from "next/link";
import ToolsCard from "../src/components/ToolsCard";
import Path from "../src/components/Path";
import { BiFilterAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import UrlBtn from "@/components/Button/UrlBtn";
import ProfileImg from "@/components/ProfileImg/ProfileImg";
import Btn from "@/components/Button/Btn";
import { FiExternalLink } from "react-icons/fi";
import Pagination from "@/components/Pagination";
import LayoutXComp from "@/layouts/LayoutX/LayoutXComp";
import Box from "@/components/Box";
import { Variant, Variants, motion } from "framer-motion";
import { scrollX } from "src/AnimationVariants/animationVariants";
import { Opacity } from "@mui/icons-material";
import { TheContext } from "src/Context/Context";

interface toolsListType {
  title: string;
  desc: string;
  download: string | number;
  repoUrl: string;
  docsUrl: string;
  tags: string[];
}

const toolsList: toolsListType[] = [
  {
    title: "react-js",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reiciendis mollitia, corporis quidem libero recusandae alias cupiditate sint eveniet quos commodi sunt, dolor unde, nemo atque doloribus ut impedit suscipit!",
    download: 124235,
    repoUrl: "https://github.com/codinsion/open-tools",
    docsUrl: "/tools/tools#1",
    tags: ["java", "algorithms", "basic", "conditions"],
  },
  {
    title: "react-js",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reiciendis mollitia, corporis quidem libero recusandae alias cupiditate sint eveniet quos commodi sunt, dolor unde, nemo atque doloribus ut impedit suscipit!",
    download: 124235,
    repoUrl: "https://github.com/codinsion/open-tools",
    docsUrl: "/tools/tools#2",
    tags: ["java", "algorithms", "basic", "conditions"],
  },
  {
    title: "react-js",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reiciendis mollitia, corporis quidem libero recusandae alias cupiditate sint eveniet quos commodi sunt, dolor unde, nemo atque doloribus ut impedit suscipit!",
    download: 124235,
    repoUrl: "https://github.com/codinsion/open-tools",
    docsUrl: "/tools/tools#3",
    tags: ["java", "algorithms", "basic", "conditions"],
  },
  {
    title: "react-js",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reiciendis mollitia, corporis quidem libero recusandae alias cupiditate sint eveniet quos commodi sunt, dolor unde, nemo atque doloribus ut impedit suscipit!",
    download: 124235,
    repoUrl: "https://github.com/codinsion/open-tools",
    docsUrl: "/tools/tools#4",
    tags: ["java", "algorithms", "basic", "conditions"],
  },
  {
    title: "react-js",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reiciendis mollitia, corporis quidem libero recusandae alias cupiditate sint eveniet quos commodi sunt, dolor unde, nemo atque doloribus ut impedit suscipit!",
    download: 124235,
    repoUrl: "https://github.com/codinsion/open-tools",
    docsUrl: "/tools/tool#5",
    tags: ["java", "algorithms", "basic", "conditions"],
  },
];

function ToolsLayout({ data, toolsStatus }: any) {
  // const { toolsData } = useContext(TheContext);
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [toolsPage, setToolsPage] = useState<any>(null);
  const toolsData = data;


  function makePage(arr: any) {
    let pages: any = [];
    for (let i: number = 0; i < arr.length; i = i + i) {
      pages.push(arr.splice(i, 10));
    }
    // return pages;
    setToolsPage(pages)
  }




  const tags = [
    "javascript",
    "object",
    "logic",
    "logic",
    "logic",
    "python",
    "adjust",
  ];

  const defaultImg =
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";

  // console.log(toolsData);
  useEffect(()=>{
      makePage(toolsList)
      console.log(toolsPage, '----------')
  },[])

  return (
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
                <Path path="/tools/" />
              </span>
              <BiFilterAlt
                className="lg:hidden cursor-pointer"
                onClick={() => setToggleFilter(!toggleFilter)}
              />
            </div>
            <div className="space-y-3  p-3 ">
              {toolsData &&
                toolsData.map((item: any) => (
                  <ToolsCard
                    key={Math.random() * 500}
                    title={item.title}
                    desc={item.description}
                    views={item.views}
                    docsUrl={`/tools/${item.slug}`}
                    tags={item.category}
                  />
                ))}
              <Pagination />
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
              Filter{" "}
              <BiFilterAlt
                className="relative scale-125 cursor-pointer"
                onClick={() => setToggleFilter(!toggleFilter)}
              />
            </span>
            <div className="p-2 lg:p-0">
              <Box>
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
              </Box>
              <Box>
                <h2 className="text-xl font-medium">Collebrator</h2>
                <div className="flex flex-wrap gap-2 mt-5">
                  {tags.map((item) => (
                    <ProfileImg imgUrl={defaultImg} key={Math.random() * 600} />
                  ))}
                  <Link
                    href="#"
                    className="text-3xl animate-pulse flex items-end justify-center aspect-square rounded-full p-2 w-16 sm:w-20"
                  >
                    .....
                  </Link>
                </div>
                <Btn
                  ariaLabel="Collebrate to open-tools with us on Github"
                  target="_blank"
                  text={"Collebrate"}
                  cssStyle={`w-full rounded-2xl mt-5`}
                  icon={<FaGithub />}
                />
              </Box>
              <Box>
                <h2 className="text-xl font-medium mb-5">Codinasion</h2>
                <p className="tracking-wider">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  ea et, perspiciatis sit optio quibusdam labore beatae officia
                  deleniti possimus reiciendis alias tempora. Error quaerat
                  rerum dolorum tempora et facilis.
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
