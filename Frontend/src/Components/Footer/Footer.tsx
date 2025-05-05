import React from "react";
import { motion } from "framer-motion";
import { Copyright, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[rgba(20,20,22,1)] to-[rgba(30,30,32,1)] text-white py-12 px-4 sm:px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
      >
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center gap-6"
        >
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
            <span className="text-sm sm:text-base">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
            <span className="text-sm sm:text-base">Instagram</span>
          </motion.a>
        </motion.div>

        {/* Privacy Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <a
            href="/privacy-policy"
            className="text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            Privacy and Policy
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex items-center gap-2 text-gray-300 text-sm sm:text-base"
        >
          <span>MEDIAN</span>
          <Copyright className="w-4 h-4" />
          <span>2025</span>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;