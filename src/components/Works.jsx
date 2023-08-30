import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github, live } from "../assets/index.js";
import { projects } from "../const/index.js";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion.js";
import { SectionHeading } from "./index.js";

const Works = () => {
  return (
    <>
      <SectionHeading garnish="My works">Projects</SectionHeading>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          These projects showcases my skills and experience through real-world
          application. Each project is briefly described and linked to
          repositories and live demos. It reflects my abilities to solve complex
          problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="flexWrap mt-20 gap-7">
        {projects.map((project, ix) => (
          <ProjectCard key={project.name} ix={ix} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");

function ProjectCard({ name, description, tags, image, source_code_link, ix }) {
  return (
    <motion.div variants={fadeIn("up", "spring", ix * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]"
      >
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full rounded-2xl object-cover"
          />

          <div className="absolute inset-0 m-3 flex justify-end gap-2">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient flexCenter group h-10 w-10 cursor-pointer rounded-full"
            >
              <img
                src={github}
                alt={source_code_link}
                className="h-1/2 w-1/2 object-contain transition-transform duration-300 group-hover:scale-125"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient flexCenter group h-10 w-10 cursor-pointer rounded-full"
            >
              <img
                src={live}
                alt={source_code_link}
                className="h-4/5 w-4/5 object-contain transition-transform duration-300 group-hover:scale-125"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="my-2 text-sm text-secondary">{description}</p>
        </div>

        <div className="flexWrap mt-4 gap-2">
          {tags.map(({ name, color }) => (
            <p key={name} className={`text-sm ${color}`}>
              #{name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}
