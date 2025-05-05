import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const Video: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className=" min-h-screen py-1 px-4 sm:px-6 lg:px-12">
      {/* Top Text Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between text-gray-300 text-sm sm:text-base mb-10"
      >
        <p>The New ERA For Creators</p>
        <p>What can we do for you?</p>
      </motion.div>

      {/* Video Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full  mx-auto overflow-hidden rounded-3xl shadow-xl border-2 border-gray-800"
      >
        <video
          ref={videoRef}
          src="https://videos.pexels.com/video-files/12032427/12032427-uhd_2560_1440_30fps.mp4"
          className="w-full h-auto object-cover rounded-3xl bg-gradient-to-br from-[rgba(50,50,52,0.8)] to-[rgba(70,70,72,0.8)]"
          onClick={togglePlay}
        />
        <motion.button
          onClick={togglePlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0  hover:cursor-pointer flex items-center justify-center bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 rounded-3xl"
        >
          {!isPlaying && (
            <FaPlay className="text-white text-6xl sm:text-7xl transform rotate-90" />
          )}
        </motion.button>
      </motion.div>

      {/* Lower Div (Bottom Text) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-16 px-4 sm:px-6 lg:px-12"
      >
        <div className="flex flex-col gap-10 pt-20 text-white">
        <p className="mt-4 text-gray-400 text-xs font-bold sm:text-sm">MEDIAN</p>
        <p className="text-5xl leading-tight"> MEDIAN simplifies content uploading for creators by acting as a bridge to YouTube. Creators can create workspaces, add trusted editors, and have videos uploaded securely. After final approval, we publish the content, ensuring a stress-free experience. </p>
         
        </div>
      </motion.div>
    </div>
  );
};

export default Video;