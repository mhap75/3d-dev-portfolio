import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion.js";

const SectionHeading = ({ children, garnish }) => {
  return (
    <motion.div variants={textVariant()}>
      <p className="sectionSubText">{garnish}</p>
      <h2 className="sectionHeadText">{children}</h2>
    </motion.div>
  );
};

export default SectionHeading;
