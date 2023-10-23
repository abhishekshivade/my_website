import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { HashLink } from "react-router-hash-link";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let newActiveSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 0 && rect.bottom > 0) newActiveSection = section.id;

        setActiveSection(newActiveSection);
        console.log("activeSection : " + activeSection);
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Navigation bar for switching between pages Home, contact, about, portfolio, servcices, etc"
        />
        {/* <meta
          name="google-site-verification"
          content="7OY8ioaVt5fcQxQkWztMjCBhUOOF6PK34FC7ygPjkXA"
        /> */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <nav className=" flex flex-col lg:flex-row text-white bg-[#0f172a]">
        <div className="fixed w-screen lg:w-36 lg:h-screen mx-auto px-4 text-white">
          <div className="flex items-center justify-between py-4 lg:flex-col lg:space-y-48">
            <div className="text-lg font-semibold">
              <HashLink
                to="#home"
                className="hover:font-bold pr-[5px] hover:px-0"
              >
                My Portfolio
              </HashLink>
            </div>
            <div className="hidden lg:flex lg:flex-col gap-4">
              <HashLink
                exact={true}
                to="#home"
                className={`hover:font-bold pr-[5px] hover:pr-[1px] ${
                  activeSection === "home" ? "underline" : ""
                } `}
              >
                Home
              </HashLink>
              <HashLink
                to="#about"
                className={`hover:font-bold pr-[5px] hover:pr-[0px] ${activeSection === "about"
                    ? "underline"
                    : ""
                } `}
              >
                About
              </HashLink>
              <HashLink
                to="#projects"
                className={`hover:font-bold pr-[0px] hover:pr-[0px] ${ activeSection === "projects"
                    ? "underline"
                    : ""
                }`}
              >
                Projects
              </HashLink>
              <HashLink
                to="#contact"
                className={`hover:font-bold pr-[5px] hover:pr-[1.5px] ${activeSection === "contact"
                    ? "underline"
                    : ""
                }`}
              >
                Contact
              </HashLink>
            </div>
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} className="focus:outline-none">
                {isOpen ? (
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.77 6.36a.75.75 0 0 1 1.06 1.06L13.06 12l6.77 6.77a.75.75 0 0 1-1.06 1.06L12 13.06l-6.77 6.77a.75.75 0 0 1-1.06-1.06L10.94 12 4.17 5.23a.75.75 0 0 1 1.06-1.06L12 10.94l6.77-6.77z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.75 5.25H20.25a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5zM3.75 12.75H20.25a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5zM3.75 20.25H20.25a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="lg:hidden mt-2">
              <HashLink
                to="#home"
                className={`block py-2 px-4 ${
                  activeSection === "home"? "underline"
                    : ""
                }`}
              >
                Home
              </HashLink>
              <HashLink
                to="#about"
                className={`block py-2 px-4 ${
                  activeSection === "about" ? "underline" : ""
                }`}
              >
                About
              </HashLink>
              <HashLink
                to="#projects"
                className={`block py-2 px-4 ${
                  activeSection === "projects" ? "underline" : ""
                }`}
              >
                Projects
              </HashLink>
              <HashLink
                to="#contact"
                className={`block py-2 px-4 ${
                  activeSection === "contact" ? "underline" : ""
                }`}
              >
                Contact
              </HashLink>
            </div>
          )}
        </div>

        <div className="lg:ml-40">
          <section id="home" className={`${isOpen ? "pt-28" : " "} `}>
            <Home />
          </section>
          <section id="about" className={`${isOpen ? "pt-52" : ""}`}>
            <About />
          </section>
          <section id="projects" className={`${isOpen ? "pt-52" : ""}`}>
            <Projects />
          </section>
          <section id="contact" className={`${isOpen ? "pt-48 md:pt-0" : ""} `}>
            <Contact />
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// in above code it should show active navlink