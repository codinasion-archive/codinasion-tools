import React, { useContext, useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";
import { scrollY } from "src/AnimationVariants/animationVariants";
import { TheContext } from "src/Context/Context";
import { idRange } from "src/CommonFun/cF";


function Testimonial() {
  const context = useContext(TheContext);
  const [testimonialData, setTestimonialData] = useState<string[]>([]);

  useEffect(() => {
    const testimonialX = async () => {
      const x = idRange(context.testimonialData.apiData);
      return x;
    };
    testimonialX().then((item) => {
      setTestimonialData(item);
    });
  }, [context.testimonialData.apiData]);

  return (
    <div className="relative max-w-[1100px] mx-auto w-full p-3 space-y-2 md:space-y-5">
      <div id="users" className="relative -mt-10 lg:h-0"></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-end gap-2 md:gap-5 ">
        {testimonialData.slice(0, 3).map((item: any) => (
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ amount: 0.8, once: true }}
            variants={scrollY(100)}
            key={`testimonial-${item.id}`}
            id={`testimonialX-${item.id}`}
          >
            <TestimonialCard
              name={item.user.username}
              subTitle={"GitHub Developer"}
              profileUrl={"https://picsum.photos/200"}
              message={item.testimonial}
              id={`testimonial-${item.id}`}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-2 md:gap-5">
        {testimonialData.slice(3, 5).map((item: any) => (
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ amount: 0.8, once: true }}
            variants={scrollY(100)}
            key={`testimonial-${item.id}`}
            id={`testimonialX-${item.id}`}
            className={"w-full"}
          >
            <TestimonialCard
              name={item.login}
              subTitle={"GitHub Developer"}
              profileUrl={item.avatar_url}
              message={
                "We are a group of developer/programer from all over the world helps others developer problems by our open-source projects. We provide a wide range of programmings and tools in multiple languages which is created by our independent developers."
              }
              id={`testimonial-${item.id}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
