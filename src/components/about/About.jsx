import React from "react";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <div className="headingContainer">
        <p className="heading">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div class="small-line"></div>
      </div>
      <div className="wrapper">
        <div className="intro">
          <h2>Get to know me!</h2>
          <p>
          I'm a Frontend-Focused Web Developer passionate about building and managing the front-end of websites and web applications. I strive to create smooth, user-friendly experiences that contribute to the success of the overall product.
          <br/> <br />

          While my primary focus is on frontend development, I also work on the backend when needed, allowing me to build more complete and functional applications.I enjoy learning and improving my skills in web development, constantly exploring new technologies and best practices. 
          <br />
          <br />

          I'm always open to exciting job opportunities where I can contribute, grow, and collaborate with like-minded professionals. If you have an opportunity that matches my skills and experience, feel free to reach out!
          </p>
          <button>My Resume</button>
        </div>
        <div className="skills">
            <h2>My Skills</h2>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Git</span>
            <span>Github</span>
            <span>Responsive Design</span>
        </div>
      </div>
    </div>
  );
}

export default About;
