import Header from "../Header/Header";
import BasicCard from "./ToolsCard/basicCard";
import { motion } from "framer-motion";
import {
  scrollX,
  scrollScale,
} from "../../AnimationVariants/animationVariants";
import Link from "next/link";
import Loading from "../Loading/Loading";

interface someToolsProp {
  expendSome: boolean;
  title: string;
  subTitle: string;
  apiData: any;
  apiStatus: boolean;
}

function SomeTools({
  expendSome = false,
  title,
  subTitle,
  apiData,
  apiStatus = false,
}: someToolsProp) {
  return apiStatus ? (
    <>
      <div
        id="tools"
        className="relative py-32 max-w-[1100px] mx-auto flex flex-col justify-center overflow-x-hidden !items-center gap-10"
      >
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={scrollScale(1.2)}
          viewport={{ amount: 0.8, once: false }}
        >
          <Header title={title} subTitle={subTitle} />
        </motion.div>
        <div className="grid sm:grid-cols-2 w-full gap-2 sm:gap-4">
          {apiData.slice(0, 4).map((item: any) => (
            <motion.div
              key={Math.random() * 50 + "basicTools"}
              initial="offscreen"
              whileInView={"onscreen"}
              variants={scrollX(-50)}
              viewport={{ amount: 0.3, once: false }}
            >
              <BasicCard
                title={item.title}
                repoUrl={item.repoUrl}
                docsUrl={item.slug}
              />
            </motion.div>
          ))}
        </div>

        {expendSome && (
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={scrollX(-100)}
            viewport={{ amount: 0.9, once: false }}
            className="max-w-[1000px] w-full flex items-center"
          >
            <hr className="w-full bottom-2 border-white" />
            <Link
              href={"/tools"}
              aria-label="Explore more tools of codinasion-tools by codinasion"
              className="px-5 text-lg dark:text-white text-very-dark-blue hover:opacity-70 hover:scale-90"
            >
              More_tools
            </Link>
          </motion.div>
        )}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default SomeTools;
