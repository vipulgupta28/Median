import React from "react";
import { motion } from "framer-motion";


const LoginAsOwner: React.FC = () => {
  return (
    <div className="min-h-screen flex mt-20 justify-center ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-md "
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-white"
        >
          Login as Owner
        </motion.h1>

        <form className="space-y-6">
          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Registered Email"
              className="w-full px-4 py-2 bg-gradient-to-r from-[rgba(60,60,62,0.5)] to-[rgba(80,80,82,0.5)] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white transition-all duration-300"
              required
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Profile Password"
              className="w-full px-4 py-2 bg-gradient-to-r from-[rgba(60,60,62,0.5)] to-[rgba(80,80,82,0.5)] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white transition-all duration-300"
              required
            />
          </motion.div>

          {/* Forgot Password Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="text-right"
          >
           
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white hover:cursor-pointer text-black py-2 rounded-md hover:bg-gray-200 transition-all duration-300 font-medium shadow-md"
          >
            Login
          </motion.button>

        

         
        </form>
      </motion.div>
    </div>
  );
};

export default LoginAsOwner;