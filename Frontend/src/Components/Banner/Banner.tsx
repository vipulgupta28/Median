import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaFacebook, FaInstagram, FaChartLine, FaThumbsUp, FaHeart } from "react-icons/fa";

const icons = [FaYoutube, FaInstagram, FaFacebook, FaChartLine, FaHeart, FaThumbsUp];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[currentIndex];

  return(
    <>
    <div className="text-white flex flex-col md:flex-row sticky justify-between items-center w-full px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-16 md:py-20 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center md:text-left w-full md:w-1/2"
      >
        <div className="flex gap-4 justify-center md:justify-start">
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tight">
            LEAVE
          </span>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center md:justify-start">
          <CurrentIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-all duration-500 text-red-300" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col text-center md:text-right mt-8 md:mt-0 w-full md:w-1/2"
      >
        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tight">
          IT TO
        </span>
        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tight">
          MEDIAN
        </span>
      </motion.div>
    </div>

    </>
  );
};

export default Banner;