import About from "@/components/About/About";
import Background from "@/layouts/LayoutX/Background";
import LayoutXComp from "@/layouts/LayoutX/LayoutXComp";
import React, { useContext, useEffect } from "react";
import { TheContext } from "src/Context/Context";
import siteMetaData from "@/data/siteMetaData";

function Index({ data, status }: any) {
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
      <div className="min-h-screen flex justify-center items-center">
        <About />
      </div>
      <LayoutXComp
        pageNavigator={["home", "about", "users", "dev", "footer"]}
      />
    </>
  );
}

export default Index;

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
