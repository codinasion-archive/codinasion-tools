import { Variants } from "framer-motion";

const scrollY = (initial_pos: number) => {
  const variantsY: Variants = {
    offscreen: {
      opacity: 0,
      y: initial_pos,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", restSpeed: 30, duration: 0.2 },
    },
  };
  return variantsY;
};
const scrollX = (initial_pos: number) => {
  const variantsX: Variants = {
    offscreen: {
      opacity: 0,
      x: initial_pos,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", restSpeed: 30, duration: 0.2 },
    },
  };
  return variantsX;
};
const scrollScale = (initial_pos: number) => {
  const variantsS: Variants = {
    offscreen: {
      opacity: 0,
      scale: initial_pos,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", restSpeed: 30, duration: 0.2 },
    },
  };
  return variantsS;
};

export { scrollY, scrollX, scrollScale };
