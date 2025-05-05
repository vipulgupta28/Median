import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Credits: React.FC = () => {
  return (
    <div className=" flex items-center justify-center mt-20 py-10 px-4 sm:px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-center items-center gap-100"
      >
        {/* Text and Buttons Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Coded By Vipul Gupta
          </h1>
          <div className="text-white mb-5 ml-2">
            <p>Email: vilulgupta2802@gmail.com</p>
            <p>Phone: +91 8307872368 </p>
          </div>
          <div className="flex justify-center md:justify-start gap-4">
            <motion.button
             
              className="border-1 hover:cursor-pointer border-white px-6 py-2 text-white hover:bg-white hover:text-black transition-all duration-300 font-medium rounded-full flex items-center gap-2"
              onClick={() => window.open("https://www.linkedin.com/in/vipul-li", "_blank")}
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </motion.button>
            <motion.button
        
              className="border-1 hover:cursor-pointer border-white px-6 py-2 text-white hover:bg-white hover:text-black transition-all duration-300 font-medium rounded-full flex items-center gap-2"
              onClick={() => window.open("https://www.github.com/vipulgupta28", "_blank")}
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </motion.button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <img
            src="https://images.unsplash.com/photo-1741377772075-5f0f0d21d6b4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Vipul Gupta"
            className="h-48 w-48 sm:h-64 sm:w-64 rounded-full object-cover shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Credits;