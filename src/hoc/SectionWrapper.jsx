import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion.js";

export default function SectionWrapper(Component, idName) {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="padding relative z-0 mx-auto max-w-7xl"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
}
