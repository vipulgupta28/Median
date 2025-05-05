import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Workspace: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  // Animation variants for the modal
  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: -50 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      y: 50,
      transition: { 
        duration: 0.2 
      }
    }
  };

  return (
    <div className={`flex h-screen text-white relative ${isVisible ? "bg-black bg-opacity-60" : ""}`}>
      {/* Sidebar */}
      <div className="w-70  border-r border-white p-4 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Workspaces</h2>
        <p className="text-gray-400 text-sm">No Workspaces Yet</p>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center bg-opacity-60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white p-6 rounded-xl shadow-2xl w-96 text-black max-w-[90vw]"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Workspace</h2>
              
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Workspace Name" 
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 bg-gray-50"
                />
                <input 
                  type="number" 
                  placeholder="Number of Editors" 
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 bg-gray-50"
                />
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button 
                  onClick={toggleModal} 
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 hover:cursor-pointer transition-all duration-200 font-medium"
                >
                  Cancel
                </button>
                <button 
                  className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 hover:cursor-pointer transition-all duration-200 font-medium"
                >
                  Create
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 p-6  relative">
        <motion.button 
   
          onClick={toggleModal}
          className="absolute top-4 right-4 bg-white text-black hover:cursor-pointer hover:bg-gray-200  rounded-lg px-4 py-2 font-medium   transition-all duration-200"
        >
          Create Workspace +
        </motion.button>
      </div>
    </div>
  );
};

export default Workspace;