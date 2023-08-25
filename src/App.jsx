import {
  About,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <div className="bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />

      <div>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
