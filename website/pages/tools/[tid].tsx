import Path from "@/components/Path";
import React, { useContext, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import LayoutXComp from "@/layouts/LayoutX/LayoutXComp";
import { motion } from "framer-motion";
import AlertBox from "@/components/AlertBox/AlertBox";
import NotFound from "pages/404";
// import LiveEditor from "@/components/ToolsComps/LiveEditor";
import ToolDocs from "@/components/ToolsComps/ToolsDocs";
import Collaborator from "@/components/ToolsComps/AsideComps/Collaborator";
import InstallPkg from "@/components/ToolsComps/AsideComps/InstallPkg";
import { alertType } from "src/Objs&Interfaces/Interface";
import ToolInfo from "@/components/ToolsComps/AsideComps/ToolsInfo";
import SomeTools from "@/components/ToolsComps/SomeTools";
import Keywords from "@/components/ToolsComps/Keywords";
import ActiveLang from "@/components/ToolsComps/ActiveLang";
import ToolHeader from "@/components/ToolsComps/ToolHeader";
import Issue from "@/components/ToolsComps/Issue";
import siteMetaData from "@/data/siteMetaData";
import Comment from "@/components/Comment";
import Clipboards from "@/components/Clipboards/Clipboards";
import LiveEditor from "@/components/ToolsComps/LiveEditor";
import { TheContext } from "src/Context/Context";

function Tid({ dataAll, toolsStatus }: any) {
  const [activeLang, setLang] = useState<string>("javascript");
  const context = useContext(TheContext);
  const router = useRouter();

  const toolData: any = toolsStatus
    ? { apiData: dataAll[0], apiStatus: true }
    : { apiData: null, apiStatus: toolsStatus };
  const related: any = toolsStatus
    ? { apiData: dataAll[1], apiStatus: true }
    : { apiData: null, apiStatus: toolsStatus };
  const npmData: any = toolsStatus
    ? { apiData: dataAll[2], apiStatus: true }
    : { apiData: null, apiStatus: toolsStatus };
  const pipData: any = toolsStatus
    ? { apiData: dataAll[3], apiStatus: true }
    : { apiData: null, apiStatus: toolsStatus };

  const [alertState, setAlertState] = useState<alertType>({
    title: "Title",
    message: "Message",
    status: false,
  });

  useLayoutEffect(() => {
    toolsStatus &&
      context.setCommonTools({ apiStatus: toolsStatus, apiData: dataAll[4] });
  }, [dataAll, toolsStatus]);

  return toolsStatus ? (
    <>
      <div className="w-full z-20 relative top-20 sm:top-32 sm:p-3">
        <div className="max-w-[1200px] relative mx-auto grid lg:grid-cols-3 gap-3">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "linear", type: "tween" }}
            className="lg:col-span-2 col-span-3 relative bg-white dark:bg-very-dark-blue dark:text-white rounded-2xl overflow-hidden"
          >
            <div className="w-full p-4 text-xl bg-very-dark-blue flex justify-between items-center tracking-wider text-white">
              <div>
                <Path path={`tools/${router.isReady && router.query["tid"]}`} />
              </div>
            </div>
            <div className="space-y-5 lg:px-4 p-3 ">
              <ToolHeader
                title={toolData.apiData.title}
                subTitle={toolData.apiData.description}
              />
              <div>
                <ActiveLang activeLang={activeLang} setLang={setLang} />

                {/* <LiveEditor /> */}
                {activeLang == "javascript" && (
                  <>
                    <ToolDocs
                      markdown={toolData.apiData.js}
                      lang={activeLang}
                    />
                  </>
                )}

                {activeLang == "typescript" && (
                  <>
                    <ToolDocs
                      markdown={toolData.apiData.ts}
                      lang={activeLang}
                    />
                  </>
                )}
                {activeLang == "python" && (
                  <>
                    <ToolDocs
                      markdown={toolData.apiData.py}
                      lang={activeLang}
                    />
                  </>
                )}
                {activeLang == "shell" && (
                  <>
                    <ToolDocs
                      markdown={toolData.apiData.sh}
                      lang={activeLang}
                    />
                  </>
                )}
              </div>
              <Keywords keywords={toolData.apiData.category} />
              <div className="hidden lg:block">
                <Issue />
              </div>
              <div>
                <Comment />
              </div>
            </div>
          </motion.div>

          {/* sidebar start */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "linear", type: "tween" }}
            className={"col-span-3 lg:col-span-1 p-3 sm:p-0"}
          >
            <div
              className={`rounded-2xl overflow-hidden !w-full relative z-20 h-fit`}
            >
              {activeLang !== "shell" ? (
                <div className="w-full flex items-center justify-between rounded-2xl lg:rounded-none bg-very-dark-blue p-4 text-lg text-white">
                  {activeLang === "python" ? (
                    <>
                      <p>{"> "}pip install codinasion-tools</p>
                      <Clipboards clipText={"pip install codinasion-tools"} />
                    </>
                  ) : (
                    <>
                      <p>{"> "}npm install codinasion-tools</p>
                      <Clipboards clipText={"npm install codinasion-tools"} />
                    </>
                  )}
                </div>
              ) : (
                <div className="w-full flex items-center justify-between rounded-2xl lg:rounded-none bg-very-dark-blue p-4 text-lg text-white">
                  <p className="opacity-0">x</p>
                </div>
              )}

              <div>
                <ToolInfo
                  used={toolData.apiData.used}
                  date={
                    activeLang === "python" || activeLang === "shell"
                      ? new Date(
                          pipData.apiData.releases[
                            pipData.apiData.info.version
                          ][0].upload_time_iso_8601
                        )
                      : new Date(npmData.apiData.time.modified)
                  }
                  version={
                    activeLang === "python" || activeLang === "shell"
                      ? pipData.apiData.info.version
                      : npmData.apiData["dist-tags"].latest
                  }
                  license={"MIT"}
                  UnpackedSize={
                    activeLang === "python" || activeLang === "shell"
                      ? (
                          pipData.apiData.releases[
                            pipData.apiData.info.version
                          ][0].size / 1000
                        )
                          .toString()
                          .slice(0, 4) + " kB"
                      : (
                          npmData.apiData.versions[
                            npmData.apiData["dist-tags"].latest
                          ].dist.unpackedSize / 1000
                        )
                          .toString()
                          .slice(0, 4) + " kB"
                  }
                  totalFile={
                    activeLang === "javascript" || activeLang === "typescript"
                      ? npmData.apiData.versions[
                          npmData.apiData["dist-tags"].latest
                        ].dist.fileCount
                      : null
                  }
                  lang={activeLang}
                />
                <Collaborator
                  apiData={toolData.apiData.contributors}
                  apiStatus={toolsStatus}
                  more={false}
                />
                <InstallPkg
                  setAlertState={setAlertState}
                  alertData={{
                    title: "Download",
                    message: "Your download has started",
                    status: true,
                  }}
                />
              </div>
              <div className="mt-5 lg:hidden">
                <Issue />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="px-3 sm:p-0">
          <SomeTools
            expendSome={false}
            title={""}
            subTitle={""}
            apiData={related.apiData}
            apiStatus={related.apiStatus}
          />
        </div>
        <div className="py-32 "></div>
      </div>
      {alertState.status && (
        <AlertBox alertData={alertState} close={setAlertState} />
      )}
      <LayoutXComp
        pageNavigator={["home", "tools", "users", "dev", "footer"]}
      />
    </>
  ) : (
    <NotFound />
  );
}

export default Tid;

export const getStaticPaths = async () => {
  try {
    const res = await fetch(`${siteMetaData.backendUrl}/tools-data/`);

    if (res.status === 200) {
      const data = await res.json();

      const paths = data.slice(0, 1).map((tool: any) => {
        return {
          params: { tid: tool.slug },
        };
      });

      return {
        paths,
        fallback: true,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps = async (context: any) => {
  try {
    const [res1, res2, res3, res4, res5] = await Promise.all([
      fetch(
        `${siteMetaData.backendUrl}/tools-data/${context.params.tid}/?format=json`
      ),
      fetch(
        `${siteMetaData.backendUrl}/tools-data/related/${context.params.tid}/?format=json`
      ),
      fetch(`${siteMetaData.npmAPIUrl}/codinasion-tools`),
      fetch(`${siteMetaData.pipAPIUrl}/codinasion-tools/json`),
      fetch(`${siteMetaData.backendUrl}/most-used-tools/?format=json`),
    ]);

    if (res1.status === 200) {
      const data1 = await res1.json();
      const data2 = await res2.json();
      const data3 = await res3.json();
      const data4 = await res4.json();
      const data5 = await res5.json();

      return {
        props: {
          toolsStatus: true,
          dataAll: [data1, data2, data3, data4, data5],
        },
        revalidate: 60,
      };
    }
  } catch (error) {
    return {
      props: {
        toolsStatus: false,
        dataAll: null,
      },
      revalidate: 60,
    };
  }
};
