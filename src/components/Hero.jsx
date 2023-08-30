import { motion } from "framer-motion";
import ComputersCanvas from "./canvas/Computers.jsx";

const Hero = () => {
  return (
    <section className="relative mx-auto h-[100dvh] w-full">
      <div className="paddingX absolute inset-0 top-[120px] mx-auto flex max-w-7xl items-start gap-5">
        <div className="flexCol mt-5 items-center justify-center">
          <div className="bg-hero-purple h-5 w-5 rounded-full" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className="heroHeadText text-white">
            Hi, I&apos;m <span className="text-hero-purple">Moh</span>
          </h1>
          <p>
            A <span className="text-[#61dbfb]">React</span> &{" "}
            <span className="rounded-md bg-white/80 px-0.5 text-black backdrop-blur-xl">
              NextJS
            </span>{" "}
            developer
            <br className="hidden sm:block" /> specializing in creating seamless
            web applications
          </p>
        </div>

      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flexCenter">
        <a href="#about">
          <div className="w-[36px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{ y: [0, 24, 0] }} transition={{
              duration: 1.5, repeat: Infinity, repeatType: "loop"
            }} className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
