import React, { useRef } from "react";
import "./parallax.scss";
import {motion, useScroll, useTransform} from "framer-motion";

function Parallax({ type }) {

  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ["start start", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "liner-gradient(180deg, #111132,rgb(80, 80, 104))",
      }}
    >
      <motion.h1 style={{y: yText}}>{type === "services" ? "What We Do?" : "What We Did?"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y: yBg}} className="planets"></motion.div>
      <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  );
}

export default Parallax;
