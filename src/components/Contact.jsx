import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion.js";
import { EarthCanvas, Input } from "./index.js";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target }) => {
    setForm((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(
        "Thanks for submitting your contact details. We will not notify you since this is just a practice" +
          ` application.\n${JSON.stringify(form)}`,
      );
    }, 1000);
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
      >
        <p className="sectionSubText">Get in touch</p>
        <h3 className="sectionHeadText">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flexCol mt-12 gap-8"
        >
          <Input
            title="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
          />
          <Input
            title="Your Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@gmail.com"
          />
          <Input
            textArea
            title="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="The message goes here"
          />
          <button
            type="submit"
            className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
