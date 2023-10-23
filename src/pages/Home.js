import React from "react";
import { Helmet } from "react-helmet";
import HomeBg from "../assets/home/intro.png";

function Home() {
  return (
    <div
    className="flex flex-wrap gap-10 justify-around py-36 items-center px-10"
    id="home"
    >
      <Helmet>
        <title>Abhishek Shiavde | Web Developer</title>
        <meta
          name="description"
          content="Welcome to Abhishek Shiavde's personal website. Explore his portfolio, learn about his background, and get in touch with him for web development and collaboration opportunities."
        />
        {/* <meta
          name="google-site-verification"
          content="7OY8ioaVt5fcQxQkWztMjCBhUOOF6PK34FC7ygPjkXA"
        /> */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>
        <div
        className="max-w-[604px]"
        >
          <p>Hey I'm</p>
          <h1>
            <span>&lt;&gt;</span> Abhishek Shivade <span>&lt;/&gt;</span>
          </h1>
          <p>
            Junior Software Engineer <span>and </span>
            <span>Web Developer</span>
          </p>
          <p>
            Welcome to my <span>digital realm</span>, where{" "}
            <span>code comes to life</span> and
            <span> web solutions take shape</span>. Join me on this
            <span> tech-infused journey</span>
          </p>
        </div>
      </div>
      <img
        src={HomeBg}
        className="w-72"
        alt=""
      />
    </div>
  );
}

export default Home;
