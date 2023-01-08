import Path from "../../src/components/Path";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import LayoutXComp from "@/layouts/LayoutX/LayoutXComp";
import { motion } from "framer-motion";
import AlertBox from "@/components/AlertBox/AlertBox";
import NotFound from "pages/404";
import LiveEditor from "@/components/ToolsComps/LiveEditor";
import ToolDocs from "@/components/ToolsComps/ToolsDocs";
import Collaborator from "@/components/ToolsComps/AsideComps/Collaborator";
import InstallPkg from "@/components/ToolsComps/AsideComps/InstallPkg";
import { alertType } from "src/Objs&Interfaces/Interface";
import ToolInfo from "@/components/ToolsComps/AsideComps/ToolsInfo";
import SomeTools from "@/components/ToolsComps/SomeTools";
import Keywords from "@/components/ToolsComps/Keywords";
import ActiveLang from "@/components/ToolsComps/ActiveLang";
import ToolHeader from "@/components/ToolsComps/ToolHeader";
import Link from "next/link";
import Box from "@/components/Box";
import { GoIssueOpened } from "react-icons/go";
import Issue from "@/components/ToolsComps/Issue";

function Tid({ dataAll, toolsStatus }: any) {
  const [activeLang, setLang] = useState<string>("javascript");
  const dateRef = useRef<any>();
  const router = useRouter();

  const toolData: any = toolsStatus
    ? { apiData: dataAll[0], apiStatus: true }
    : { apiData: null, apiStatus: toolsStatus };
  const related: any = toolsStatus
    ? { apiData: dataAll[1], apiStatus: true }
    : { apiData: null, apiStatus: toolsStatus };
  const [alertState, setAlertState] = useState<alertType>({
    title: "Title",
    message: "Message",
    status: false,
  });

  useEffect(() => {
    if (toolsStatus) {
      const last_updated = new Date(toolData.apiData.last_updated);
      dateRef.current = last_updated;
    }
  }, [toolData.apiData.last_updated, toolsStatus]);

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
              <span>
                <Path path={`tools/${router.isReady && router.query["tid"]}`} />
              </span>
            </div>
            <div className="space-y-5 lg:px-4 p-3 ">
              <ToolHeader
                title={toolData.apiData.title}
                subTitle={toolData.apiData.description}
              />
              <div>
                <ActiveLang activeLang={activeLang} setLang={setLang} />

                <LiveEditor />
                {activeLang == "javascript" && (
                  <>
                    <ToolDocs
                      markdown={toolData.apiData.markdown}
                      lang={activeLang}
                    />
                  </>
                )}

                {activeLang == "typescript" && (
                  <>
                    <ToolDocs
                      markdown={toolData.apiData.markdown}
                      lang={activeLang}
                    />
                  </>
                )}
                {activeLang == "python" && (
                  <>
                    <ToolDocs
                      markdown={toolData.apiData.markdown}
                      lang={activeLang}
                    />
                  </>
                )}
              </div>
              <Keywords keywords={toolData.apiData.category} />
              <div className="hidden lg:block">
                <Issue />
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
              <span className="w-full flex items-center justify-between rounded-2xl lg:rounded-none bg-very-dark-blue p-4 text-lg text-white">
                {`> `}
                {activeLang == "python"
                  ? "pip install codinasion-tools"
                  : "npm install codinasion-tools"}
              </span>
              <div>
                <ToolInfo
                  used={toolData.apiData.used}
                  date={toolData.apiData.last_updated}
                  version={"0.0.3"}
                  license={"MIT"}
                  UnpackedSize={"20.6 kB"}
                  totalFile={60}
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
export const getServerSideProps = async (context: any) => {
  try {
    const [res1, res2] = await Promise.all([
      fetch(
        `https://opentools.pythonanywhere.com/api/tools-data/${context.params.tid}/?format=json`
      ),
      fetch(
        `https://opentools.pythonanywhere.com/api/tools-data/related/${context.params.tid}/?format=json`
      ),
    ]);

    const data1 = await res1.json();
    const data2 = await res2.json();
    if (res1.status === 200) {
      return {
        props: {
          toolsStatus: true,
          dataAll: [data1, data2],
        },
      };
    }
  } catch (error) {
    return {
      props: {
        toolsStatus: false,
        dataAll: null,
      },
    };
  }
};
