import React from "react";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <div className="heading">
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="wrapper">
        <div className="intro">
          <h2>Get to know me!</h2>
          <p>
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the Projects
            section. I also like sharing content related to the stuff that I
            have learned over the years in Web Development so it can help other
            people of the Dev Community. Feel free to Connect or Follow me on my
            Linkedin and Instagram where I post useful content related to Web
            Development and Programming I'm open to Job opportunities where I
            can contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to contact me.
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
