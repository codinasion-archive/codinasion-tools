import { useContext } from "react";
import About from "@/components/About/About";
import Background from "@/layouts/LayoutX/Background";
import Intro from "@/components/Intro";
import ImportantToolsCard from "@/components/ImportantToolsCard/ImportantToolsCard";
import LayoutXComp from "@/layouts/LayoutX/LayoutXComp";
import { TheContext } from "src/Context/Context";
import { GetServerSideProps } from "next";

export default function HomePage({data, toolsStatus}:any) {
  const context = useContext(TheContext);
  
  if(toolsStatus){
    context.setToolsData(data)
  }

  console.log(context);
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
