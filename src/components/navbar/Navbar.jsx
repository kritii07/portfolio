import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />

      <div className="wrapper">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Kriti Antwal
        </motion.span>
        <div className="social">
          <a 
            href="https://www.linkedin.com/in/kritidev" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a 
            href="https://github.com/kritii07" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="GitHub" />
          </a>
          <a 
            href="mailto:kritiantwal.7@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/gmail.png" alt="Gmail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
