/**All project data */

import React, { useEffect, useState } from "react";
import HRMS from "../assets/projects/HRMS.png";
import NoteApp from "../assets/projects/Note WebApp.jpeg";
import { Helmet } from "react-helmet";

function Projects() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const portfolioData = [
    {
      src: HRMS,
      alt: "Employee Management System",
      shortDescription:
        "The HRMS Employee Management System is a comprehensive project developed using the MEAN Stack with features adding, editing, and deleting employee records. ",
      fullDescription:
        "The HRMS (Human Resource Management System) Employee Management System is a comprehensive project developed using the MEAN (MongoDB, Express.js, Angular, Node.js) stack. This robust system empowers organizations to efficiently manage their workforce. With features like adding, editing, and deleting employee records, it simplifies HR tasks. Bootstrap was utilized for the user interface to ensure a responsive and visually appealing design. The HRMS system streamlines employee data management, enhancing operational efficiency for businesses. ",
    },
    {
      src: NoteApp,
      alt: "Note Web App",
      shortDescription:
        "Magic Note is a versatile web application designed to help you organize and manage your important notes and thoughts. ",
      fullDescription:
        "Magic Note is a versatile web application designed to help you organize and manage your important notes and thoughts. This user-friendly app allows you to create, edit, and delete notes effortlessly. It's built using a combination of HTML, CSS, and JavaScript, making it accessible from any modern web browser. Magic Note provides a seamless note-taking experience for users, ensuring they can capture and revisit their ideas with ease. ",
    },
  ];

  const [showFullDescritption, setShowFullDescription] = useState(
    portfolioData.map(() => false)
  );

  const toggleDescription = (index) => {
    const updatedShowFullDescription = [...showFullDescritption];
    updatedShowFullDescription[index] = !updatedShowFullDescription[index];
    setShowFullDescription(updatedShowFullDescription);
  };

  return (
    <div
    className="px-10 py-5"
    >
      <Helmet>
        {/* <title>Abhishek Shiavde | Projects</title> */}
        <meta
          name="description"
          content="Explore a showcase of Abhishek Shiavde's previous projects and work. View web development, software engineering, and design projects."
        />
        {/* <meta
          name="google-site-verification"
          content="7OY8ioaVt5fcQxQkWztMjCBhUOOF6PK34FC7ygPjkXA"
        /> */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <h1
      className="text-center py-5 text-2xl font-semibold"
      >
        Projects
      </h1>
      <div
      className="flex flex-col gap-8 my-8"
      >
        {portfolioData.map((image, index) => (
          <div key={index}>
            <h1>{image.alt}</h1>
            <div
            className="flex flex-col lg:flex-row md:gap-4 my-2"
            >
              <img src={image.src} alt={image.alt} className="w-96" />
              {windowWidth >= 768 ? (
                <p>{image.fullDescription}</p>
              ) : (
                <p className="mt-2">
                  {showFullDescritption[index]
                    ? image.fullDescription
                    : image.shortDescription}

                  {
                    <button
                      className="text-[#1f51FF]"
                      onClick={() => toggleDescription(index)}
                    >
                      {showFullDescritption[index]
                        ? " Read Less"
                        : " Read More"}
                    </button>
                  }
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
