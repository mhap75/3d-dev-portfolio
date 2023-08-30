import { motion } from "framer-motion";
import { testimonials } from "../const/index.js";
import { SectionWrapper } from "../hoc/index.js";
import { fadeIn } from "../utils/motion.js";
import { SectionHeading } from "./index.js";

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[20px] bg-black-100">
      <div className="padding min-h-[300px] rounded-2xl bg-tertiary">
        <SectionHeading garnish="What others say about me">
          Testimonials.
        </SectionHeading>
      </div>

      <div className="paddingX flexWrap -mt-20 gap-7 pb-14">
        {testimonials.map((tes, ix) => (
          <FeedbackCard key={tes.name} {...tes} ix={ix} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  image,
  ix,
}) => (
  <motion.div
    variants={fadeIn("", "spring", ix * 0.5, 0.75)}
    className="w-full rounded-3xl bg-black-200 p-10 xs:w-[320px]"
  >
    <p className="text-5xl font-black text-white">&quot;</p>

    <div className="mt-1">
      <p className="text-lg tracking-wider text-white">{testimonial}</p>

      <div className="flexBetween mt-7 gap-1">
        <div className="flexCol flex-1">
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient text-lg">@ </span>
            {name}
          </p>
          <p className="mt-1 text-xs text-secondary">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`Said by ${name}`}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);
