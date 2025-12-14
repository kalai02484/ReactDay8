import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-cyan-700 p-5 text-white font-bold max-w-full flex justify-between items-center">
      <div className="logo text-2xl">MyApp</div>
      <div className="links space-x-4 text-lg">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </div>
    </div>
  );
};

export default Navbar;
