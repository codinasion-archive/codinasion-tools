import { useContext, useEffect } from "react";
import About from "@/components/About/About";
import Background from "@/layouts/LayoutX/Background";
import Intro from "@/components/Intro";
import SomeTools from "@/components/ToolsComps/SomeTools";
import LayoutXComp from "@/layouts/LayoutX/LayoutXComp";
import { TheContext } from "src/Context/Context";
import siteMetaData from "@/data/siteMetaData";

export default function HomePage({ data, status }: any) {
  const context = useContext(TheContext);
  useEffect(() => {
    if (status) {
      localStorage.removeItem("category");
      localStorage.removeItem("page");
      context.setToolsData({ apiStatus: true, apiData: data[0] });
      context.setTestimonialData({ apiStatus: true, apiData: data[1] });
      context.setCommonTools({ apiStatus: true, apiData: data[2] });
    }
  }, [data, status]);
  return (
    <>
      <Background />
      <Intro />
      <div className="px-3">
        <SomeTools
          expendSome={true}
          title={"Most Used Tools"}
          subTitle={"Our most used and common tools used by developers"}
          apiData={context.commonTools.apiData}
          apiStatus={context.commonTools.apiStatus}
        />
      </div>
      <About />
      <LayoutXComp
        pageNavigator={["home", "tools", "about", "users", "dev", "footer"]}
      />
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const [res1, res2, res3] = await Promise.all([
      fetch(`${siteMetaData.backendUrl}/tools-data/?format=json`),
      fetch(`${siteMetaData.backendUrl}/testimonials/?format=json`),
      fetch(`${siteMetaData.backendUrl}/most-used-tools/?format=json`),
    ]);

    const tools = await res1.json();
    const testimonial = await res2.json();
    const commonTools = await res3.json();

    return (
      res1.status === 200 && {
        props: {
          status: true,
          data: [tools, testimonial, commonTools],
        },
        revalidate: 60,
      }
    );
  } catch (error) {
    return {
      props: {
        status: false,
        data: null,
      },
      revalidate: 60,
    };
  }
};
