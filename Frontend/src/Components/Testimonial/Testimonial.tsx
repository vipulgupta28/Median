import React from "react";
import { motion } from "framer-motion";

const Testimonial: React.FC = () => {
 



  return (
    <div className="bg-white mt-20 rounded-4xl text-black min-h-screen py-16 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-center mb-12"
      >
        <h1 className="text-8xl font-medium  ">
          WHAT OUR <br/>CLIENTS SAY
        </h1>
        <motion.button
        
          className="border text-black border-black  px-6 py-2 rounded-full text-sm sm:text-base hover:bg-black hover:text-white hover:cursor-pointer transition-all duration-300"
        >
          MORE TESTIMONIALS
        </motion.button>
      </motion.div>

    <div className="bg-[rgba(24,24,26,1)] h-100 w-100 rounded-2xl">

    </div>
      
    </div>
  );
};

export default Testimonial;