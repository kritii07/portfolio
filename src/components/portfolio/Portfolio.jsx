import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
    id: 1,
    title: "SplitEasy",
    img: "MacBook.svg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium accusantium totam velit officia. Harum possimus totam porro eaque quasi omnis praesentium aut facilis eligendi. Impedit distinctio vitae qui et quam.",
  },
  {
    id: 2,
    title: "RoamReady",
    img: "MacBookair.svg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium accusantium totam velit officia. Harum possimus totam porro eaque quasi omnis praesentium aut facilis eligendi. Impedit distinctio vitae qui et quam.",
  },
  {
    id: 3,
    title: "CurrencyXchange",
    img: "https://images.pexels.com/photos/30435654/pexels-photo-30435654/free-photo-of-serene-forest-landscape-with-tall-pine-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium accusantium totam velit officia. Harum possimus totam porro eaque quasi omnis praesentium aut facilis eligendi. Impedit distinctio vitae qui et quam.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-180%"]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer">
          <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
