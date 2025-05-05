import React from "react";
import { Link } from "react-router-dom";

const Navbar2: React.FC = () => {
  
  return (
    <nav className="border-b border-white">
      <div className="flex flex-row items-center justify-between pl-10 mx-auto px-6 py-4">
 
    <Link to="/">
        <h1 className="font-bold text-4xl text-white tracking-tight hover:cursor-pointer">
          MEDIAN
        </h1>
    </Link>

       <div className="flex gap-10">
        <button className="bg-white text-black px-3 py-2 rounded-[6px] hover:cursor-pointer">Notes</button>
        <button className="bg-white text-black px-3 py-2 rounded-[6px] hover:cursor-pointer">Calender</button>
       </div>
      </div>
    </nav>
  );
};

export default Navbar2;