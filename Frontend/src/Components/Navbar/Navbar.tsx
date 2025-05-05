import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate  = useNavigate();
  return (
    <nav className="">
      <div className="flex flex-row items-center justify-between pl-10 mx-auto px-6 py-4">
 
 <Link to="/">
        <h1 className="font-bold text-4xl text-white tracking-tight hover:cursor-pointer">
          MEDIAN
        </h1>
    </Link>

        <div className="flex gap-5 text-white">
          <button 
          className="bg-white hover:cursor-pointer hover:bg-gray-200 animation duration-400 text-black px-5 py-2 rounded-md font-medium text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 border border-black"
          onClick={()=>navigate("/ownerjoiningformpage")}
          >Join as an Owner</button>

          <button className="bg-white hover:cursor-pointer hover:bg-gray-200 animation duration-400 text-black px-5 py-2 rounded-md font-medium text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 border border-black"
          onClick={()=>navigate("/editorjoiningformpage")}
          >Join as an Editor</button>
        </div>

        <div className="flex gap-4">
          <button 
          className="bg-white hover:cursor-pointer hover:bg-gray-200 animation duration-400 text-black px-5 py-2 rounded-md font-medium text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 border border-black"
          onClick={()=>navigate("/loginasownerpage")}
          >
            Login as Owner
          </button>
          <button 
          onClick={()=>navigate("/loginaseditorpage")}
          className="bg-white hover:cursor-pointer text-black px-5 py-2 rounded-md hover:bg-gray-200 animation duration-400 font-medium text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 border border-black">
            Login As Editor
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;