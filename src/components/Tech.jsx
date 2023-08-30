import { technologies } from "../const/index.js";
import { SectionWrapper } from "../hoc/index.js";
import { BallCanvas } from "./canvas/index.js";

const Tech = () => {
  return (
    <div className="flexWrap justify-center gap-10">
      {technologies.map(({ name, icon }) => (
        <div key={name}>
          <div className="h-28 w-28">
            <BallCanvas icon={icon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
