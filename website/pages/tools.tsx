import { useContext } from "react";
import ToolsCard from "../src/components/ToolsComps/ToolsCard";
import Path from "../src/components/Path";
import { BiFilterAlt } from "react-icons/bi";
import { useState, useEffect, useMemo } from "react";
import LayoutXComp from "@/layouts/LayoutX/LayoutXComp";
import { motion } from "framer-motion";
import { TheContext } from "src/Context/Context";
import { BiReset } from "react-icons/bi";
import Loading from "@/components/Loading/Loading";
import Collaborator from "@/components/ToolsComps/AsideComps/Collaborator";
import JoinCodinasion from "@/components/ToolsComps/AsideComps/JoinCodinasion";
import TopToolsKeywords from "@/components/ToolsComps/AsideComps/SearchKeywords";
import Category from "@/components/ToolsComps/AsideComps/Category";
import { categoryFun } from "src/CommonFun/cF";
import PaginationII from "@/components/Pagination/PaginationII";

function ToolsLayout({ data, status }: any) {
  const context = useContext(TheContext);
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [toolsPage, setToolsPage] = useState<number>(2);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [toolsApi, setToolsApi] = useState([]);
  const [filteredToolsData, setFilter] = useState([]);

  useEffect(() => {
    if (localStorage.category !== undefined) {
      setActiveCategory(localStorage.category);
    }
    if (status) {
      context.setCommonTools({ apiStatus: true, apiData: data[3] });
      context.setTestimonialData({ apiStatus: true, apiData: data[4] });
    }
  }, []);

  useEffect(() => {
    if (status) {
      context.setToolsData({ apiStatus: true, apiData: data[0] });
    }
  }, [data, status]);

  useEffect(() => {
    status && setToolsApi(data[0]);
  }, [data, status]);

  useEffect(() => {
    if (status) {
      if (activeCategory === null) {
        setToolsApi(data[0]);
        const localPage = localStorage.getItem("page");
        setToolsPage(parseInt(localPage == null ? "1" : localPage));
      } else {
        categoryFun(data[0], activeCategory).then((item: any) => {
          setToolsApi(item);
        });
        localStorage.setItem("page", "1");
        const localPage = localStorage.getItem("page");
        setToolsPage(parseInt(localPage == null ? "1" : localPage));
      }
    }
  }, [activeCategory, data]);

  useEffect(() => {
    const localPage = localStorage.getItem("page");
    setToolsPage(parseInt(localPage == null ? "1" : localPage));

    if (status) {
      if (toolsPage <= 1) {
        setFilter(toolsApi.slice(0, 10));
      } else {
        setFilter(toolsApi.slice(10 * (toolsPage - 1), 10 * toolsPage));
      }
    }
  }, [toolsApi, toolsPage, status, activeCategory]);

  return status ? (
    <>
      <div
        id="tools"
        className="w-full z-20 relative top-20 sm:top-32 px-0 sm:p-3"
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
              <div className="flex gap-5">
                <BiReset
                  className="scale-125 block lg:hidden hover:opacity-75 cursor-pointer"
                  onClick={() => {
                    localStorage.removeItem("category");
                    localStorage.setItem("page", "1");
                    setActiveCategory(null);
                  }}
                />

                <BiFilterAlt
                  className="lg:hidden hover:opacity-75 cursor-pointer"
                  onClick={() => setToggleFilter(!toggleFilter)}
                />
              </div>
            </div>
            <div className="space-y-3  p-3 ">
              <>
                {filteredToolsData.map((item: any) => (
                  <ToolsCard
                    key={Math.random() * 500 + "tools_page"}
                    title={item.title}
                    desc={item.description}
                    views={item.views}
                    docsUrl={`tools/${item.slug}`}
                    tags={item.category}
                  />
                ))}
                {toolsApi.length > 10 && (
                  <PaginationII
                    toolsPage={toolsPage}
                    toolsApi={toolsApi.length}
                    setToolsPage={setToolsPage}
                  />
                )}
              </>
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
              <div className="flex gap-5">
                <BiReset
                  className="scale-125 hidden lg:block hover:opacity-75 cursor-pointer"
                  onClick={() => {
                    localStorage.removeItem("category");
                    localStorage.setItem("page", "1");
                    setActiveCategory(null);
                  }}
                />
                <BiFilterAlt
                  className="relative scale-125 hover:opacity-75 cursor-pointer"
                  onClick={() => setToggleFilter(!toggleFilter)}
                />
              </div>
            </span>
            <div className="p-2 lg:p-0">
              <Category
                keywords={data[1]}
                title={"Category"}
                setCategory={setActiveCategory}
                category={activeCategory}
              />
              <TopToolsKeywords keywords={data[3]} title={"Top tools"} />
              <Collaborator apiData={data[2]} apiStatus={status} />
              <JoinCodinasion />
            </div>
          </div>
        </div>
        <div className="py-32 "></div>
      </div>
      <LayoutXComp
        pageNavigator={["home", "tools", "users", "dev", "footer"]}
      />
    </>
  ) : (
    <Loading />
  );
}

export default ToolsLayout;
export const getStaticProps = async () => {
  try {
    const [res1, res2, res3, res4, res5] = await Promise.all([
      fetch("https://opentools.pythonanywhere.com/api/tools-data/?format=json"),
      fetch(`https://opentools.pythonanywhere.com/api/category/?format=json`),
      fetch(
        `https://opentools.pythonanywhere.com/api/contributors/?format=json`
      ),
      fetch(
        `https://opentools.pythonanywhere.com/api/most-used-tools/?format=json`
      ),
      fetch(
        `https://opentools.pythonanywhere.com/api/testimonials/?format=json`
      ),
    ]);

    const tools = await res1.json();
    const category = await res2.json();
    const contributes = await res3.json();
    const commonTools = await res4.json();
    const testimonial = await res5.json();

    return (
      res1.status === 200 && {
        props: {
          status: true,
          data: [tools, category, contributes, commonTools, testimonial],
        },
        revalidate: 60,
      }
    );
  } catch (error) {
    return {
      props: {
        toolsStatus: false,
        data: null,
      },
      revalidate: 60,
    };
  }
};
