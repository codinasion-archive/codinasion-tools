import { useContext, useEffect, useState } from "react";
import About from "@/components/About/About";
import Background from "@/layouts/LayoutX/Background";
import Intro from "@/components/Intro";
import ImportantToolsCard from "@/components/ImportantToolsCard/ImportantToolsCard";
import LayoutXComp from "@/layouts/LayoutX/LayoutXComp";
import { TheContext } from "src/Context/Context";

export default function HomePage({ data, toolsStatus }: any) {
  const context = useContext(TheContext);

  useEffect(() => {
    if (toolsStatus) {
      context.setToolsData({ toolsStatus: true, data });
    }
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
    console.log(context.toolsData);
    if (context.devs.devs.length === 0) {
      fetchDevFun();
    }
  }, []);
  return (
    <>
      <Background />
      <Intro />
      <ImportantToolsCard />
      <About />
      <LayoutXComp
        pageNavigator={["home", "tools", "about", "users", "dev", "footer"]}
      />
    </>
  );
}
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
