/**experience education and skills */

import React from "react";
import { Helmet } from "react-helmet";
import ResumePDF from "../assets/about/Abhishek Shivade Resume.pdf";
// import DownloadButton from "../assets/about/download.svg";

function About() {
  const handleDownloadResume = () => {
    window.open(ResumePDF, "_blank");
  };

  return (
    <div>
      <Helmet>
        {/* <title>Abhishek Shiavde | About Me</title> */}
        <meta
          name="description"
          content="Learn about Abhishek Shiavde's background, skills, and experience. Discover his passion for web development, software engineering, and design."
        />
        {/* <meta
          name="google-site-verification"
          content="7OY8ioaVt5fcQxQkWztMjCBhUOOF6PK34FC7ygPjkXA"
        /> */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <h1 className="text-center py-10 text-2xl font-semibold">About Me</h1>
      <div className="px-16">
        <p>
          Highly motivated Junior Software Engineer and Web Developer with
          hands-on experience of 7 months in developing websites. Proficient in
          Java, Node.js, React, Angular, MongoDB, SQL Server, and skilled in
          translating requirements into application design and system
          requirements.
        </p>
        <br />
        <h6 className="text-xl font-medium mb-2">Technical Skills:</h6>
        <ul>
          <li>Programming languages: Java, Node.js, JavaScript</li>
          <li>Databases: SQL Server, MongoDB</li>
          <li>
            Frameworks: Angular, React, Redux, Express.js, Material UI,
            Bootstrap, Tailwind CSS
          </li>
          <li>Other tools: Git, GitHub, Figma, PUG, Postman, Swagger</li>
        </ul>
        <br />
        <h6 className="text-xl font-medium mb-2">Work Experience:</h6>
        <p>
          Junior Software Engineer
          <br />
          Zensar Technologies, Pune
          <br />
          March 2022 - September 2022{" "}
        </p>
        <br />
        Responsibilities:
        <ul className="px-10">
          <li className="list-disc">
            Implemented the frontend using React.js, creating reusable
            components for various parts of the website.
          </li>
          <li className="list-disc">
            Utilized Redux to manage the global state of the application,
            ensuring efficient state updates and a consistent user experience.
          </li>
          <li className="list-disc">
            Developed the backend using Node.js and Express.js to handle API
            requests and database interactions.
          </li>
          <li className="list-disc">
            Ensured responsive and visually appealing UI/UX across different
            devices and screen sizes.
          </li>
        </ul>
        <br />
        Key Learnings:
        <ul className="px-10">
          <li className="list-disc">
            Gained a deeper understanding of the MERN stack and how Redux
            simplifies state management in complex applications.
          </li>
          <li className="list-disc">
            Learned to work collaboratively in a team environment, incorporating
            feedback and adapting to changing project requirements.
          </li>
        </ul>
        <br />
        <h2 className="text-xl font-medium mb-2">Education:</h2>
        <p>
          Bachelor of Engineering
          <br /> Electronics and Telecommunication Engineering <br /> Savitribai
          Phule Pune University
          <br /> 2021
        </p>
        <br />
        <h2 className="text-xl font-medium mb-2">Certification:</h2>
        <p>
          Java Full-Stack Developer <br /> Codekul Pvt. Ltd., Pune
          <br /> 2023
        </p>
        <br />
        <h2 className="text-xl font-medium mb-2">Additional Inofrmation:</h2>
        <ul className="px-10">
          <li className="list-disc">Fluent in English, Hindi, and Marathi.</li>
          <li className="list-disc">
            Strong problem-solving skills and ability to work collaboratively in
            a team environment.
          </li>
          <li className="list-disc">
            Always eager to learn and explore new technologies to enhance
            development skills.
          </li>
        </ul>
      </div>
      <div className="flex mt-4 ml-16 gap-5 items-center">
        {/* <p>Download my Resume</p> */}
        <button
          className="w-40 p-2 border rounded-lg hover:font-semibold"
          onClick={handleDownloadResume}
        >
          Download Resume
          {/* <img src={DownloadButton} alt="Download my Resume" /> */}
        </button>
      </div>
    </div>
  );
}

export default About;
