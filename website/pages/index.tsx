import About from "@/components/About/About";
import Background from "@/layouts/LayoutX/Background";
import Intro from "@/components/Intro";
import ImportantToolsCard from "@/components/ImportantToolsCard/ImportantToolsCard";
import LayoutXComp from "@/layouts/LayoutX/LayoutXComp";

export default function HomePage() {
  return (
    <>
      <Background />
      <Intro />
      <ImportantToolsCard />
      <About />
      <LayoutXComp pageNavigator={['home', 'tools', 'about', 'users', 'dev', 'footer']}/>
    </>
  );
}
