import { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets/index.js";
import { navLinks } from "../const/index.js";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="paddingX fixed top-0 z-20 flex w-full items-center bg-primary py-5">
      <div className="flexBetween mx-auto w-full max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            setIsMenuOpen(false);
          }}
        >
          <img src={logo} alt="home" className="h-9 w-9 object-contain" />
          <p className="flex text-lg font-bold text-white">
            MHAP&nbsp;<span className="hidden sm:block">|&nbsp;Portfolio</span>
          </p>
        </Link>
        <ul className="hidden list-none gap-10 sm:flex">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${
                active === navLink.title ? "text-white" : "text-secondary"
              } text-lg font-medium hover:text-white`}
              onClick={() => setActive(navLink.title)}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={isMenuOpen ? close : menu}
            alt="toggle menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          <div
            className={`${
              !isMenuOpen ? "-z-50 opacity-0" : "z-10 opacity-100"
            } black-gradient absolute right-0 top-20 mx-4 my-2 flex min-w-[140px] rounded-xl p-6 transition-all duration-300`}
          >
            <ul className="flexCol list-none items-start justify-end gap-4">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  className={`${
                    active === navLink.title ? "text-white" : "text-secondary"
                  } text-[16px] font-medium`}
                  onClick={() => {
                    setActive(navLink.title);
                    setIsMenuOpen(false);
                  }}
                >
                  <a href={`#${navLink.id}`}>{navLink.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
