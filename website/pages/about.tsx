import About from "@/components/About/About";
import Background from "@/layouts/LayoutX/Background";
import LayoutXComp from "@/layouts/LayoutX/LayoutXComp";
import React from "react";

function about() {
  return (
    <>
      <Background />
      <About />
      <LayoutXComp
        pageNavigator={["home", "about", "users", "dev", "footer"]}
      />
    </>
  );
}

export default about;
