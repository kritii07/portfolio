import React from "react";
import "./about.scss";
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  }
};

const skillsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, staggerChildren: 0.1 }
  }
};

const skillsList = [
  "HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind CSS", "Next.js","C++", "SQL", 
  "Git", "Github", "Responsive Design"
];


function About() {
  return (
    <div className="about">
      <div className="headingContainer" >
        <p className="heading">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div class="small-line"></div>
      </div>
      <div className="wrapper">
        <motion.div className="intro" variants={textVariants} initial="initial" whileInView="animate" 
          viewport={{ once: false, amount: 0.1 }}>
          <motion.h2 variants={textVariants}>Get to know me!</motion.h2>
          <motion.p variants={textVariants}>
          I'm a Frontend-Focused Web Developer passionate about building and managing the front-end of websites and web applications. I strive to create smooth, user-friendly experiences that contribute to the success of the overall product.
          <br/> <br />

          While my primary focus is on frontend development, I also work on the backend when needed, allowing me to build more complete and functional applications.I enjoy learning and improving my skills in web development, constantly exploring new technologies and best practices. 
          <br />
          <br />

          I'm always open to exciting job opportunities where I can contribute, grow, and collaborate with like-minded professionals. If you have an opportunity that matches my skills and experience, feel free to reach out!
          </motion.p>
          <motion.button variants={textVariants} onClick={()=>window.open("https://drive.google.com/file/d/1R5ed2XHYckmZfAjzlj3qsLcVoOXHHnQ8/view?usp=sharing", "_blank")}>My Resume</motion.button>
        </motion.div>
        <motion.div 
          className="skills"
          variants={skillsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>My Skills</h2>
          {skillsList.map((skill, index) => (
            <motion.span key={index} variants={skillsVariants}>
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
