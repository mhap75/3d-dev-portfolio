import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../const/index.js";
import { SectionWrapper } from "../hoc";
import { SectionHeading } from "./index.js";

const Experience = () => {
  return (
    <>
      <SectionHeading garnish="What I have so far been up to">
        Experiences.
      </SectionHeading>

      <div className="flexCol mt-20">
        <VerticalTimeline>
          {experiences.map((xp) => (
            <ExperienceCard key={xp.title} {...xp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experiences");

const ExperienceCard = ({
  date,
  iconBg,
  icon,
  company_name,
  title,
  points,
}) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={date}
    iconStyle={{ background: iconBg }}
    icon={
      <div className="flexCenter h-full w-full">
        <img
          src={icon}
          alt={company_name}
          className="h-[60%] w-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-[24px] font-bold text-white">{title}</h3>
      <p className="!m-0 font-semibold text-secondary">{company_name}</p>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {points.map((point) => (
          <li
            key={point.split(" ")[0]}
            className="pl-1 text-sm tracking-wider text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);
