import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { services } from "../const/index.js";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion.js";
import { SectionHeading } from "./index.js";

const About = () => {
  return (
    <>
      <SectionHeading garnish="Introduction">Overview.</SectionHeading>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        As a dedicated frontend developer, my passion lies in crafting
        captivating and flawless websites that deeply resonate with users. My
        expertise primarily revolves around constructing remarkable web
        applications using the powerful synergy of{" "}
        <strong className="text-hero-purple">ReactJs</strong> and{" "}
        <strong className="text-hero-purple">NextJs</strong> – a dynamic duo
        that powers everything from elegant personal sites to monumental
        corporate platforms. of innovation.
      </motion.p>

      <div className="flexWrap mt-20 gap-10">
        {services.map((service, ix) => (
          <ServiceCard key={service.title} index={ix} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full xs:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="flexCol min-h-[280px] items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5"
      >
        <img src={icon} alt={title} className="h-16 w-16 object-contain" />
        <h3 className="text-center text-[20px] font-bold text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
