import React from "react";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";
import { scrollY } from "src/AnimationVariants/animationVariants";

const user = [
  {
    id: 0,
    name: "robert",
    subTital: "CEO of codinasion",
    text: "Introduction to TypeScript object. object in TypeScript is used to represent the key-value pair form. By the use of ,objects, we can create a key and assign it to a value,",
  },
  {
    id: 1,
    name: "robert",
    subTital: "codinasion",
    text: "Introduction to TypeScript object. object in TypeScript is used to represent the key-value pair form. By the use of objects,but if you’ve opted to customize your letter-spacing scale to use numbers instead of descriptive words like “wide” the negative value modifier can be useful.",
  },
  {
    id: 2,
    name: "robert",
    subTital: "codinasion program",
    text: `To use a negative letter-spacing value, prefix the class name with a dash to convert it to a negative value.
    Using negative values doesn’t make a ton of sense with the letter-spacing scale Tailwind includes out of the box, `,
  },
  {
    id: 3,
    name: "robert",
    subTital: "github developer",
    text: "Introduction to TypeScript object. object in TypeScript is used to represent the key-value pair form. By the use of objects, we can create a key and assign it to a value,",
  },
  {
    id: 4,
    name: "robert",
    subTital: "github developer",
    text: `You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:tracking-wide to apply the tracking-wide utility at only medium screen sizes and above. we can create a key and assign it to a value, we can create a key and assign it to a value, we can create a key and assign it to a value,`,
  },
];
function Testimonial() {
  const row_1 = user.filter((item) => {
    return item.id < 3 && item;
  });
  const row_2 = user.filter((item) => {
    return item.id >= 3 && item;
  });

  return (
    <div className="relative max-w-[1100px] mx-auto w-full p-3 space-y-2 md:space-y-5 ">
      <div id="users" className="absolute -mt-32"></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-end gap-2 md:gap-5 ">
        {row_1.map((item) => (
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ amount: 0.8, once: true }}
            variants={scrollY(100)}
            key={`testimonial-${item.id}`}
            id={`testimonialX-${item.id}`}
          >
            <TestimonialCard
              name={"testimonial-" + item.id}
              subTitle={item.subTital}
              message={item.text}
              id={`testimonial-${item.id}`}
              cssStyle={""}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-2 md:gap-5">
        {row_2.map((item) => (
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ amount: 0.8, once: true }}
            variants={scrollY(100)}
            key={`testimonial-${item.id}`}
          >
            <TestimonialCard
              name={"testimonial-" + item.id}
              subTitle={item.subTital}
              message={item.text}
              id={`testimonial-${item.id}`}
              cssStyle={""}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
