// import { Button } from '@mui/material'
import React, { useEffect, useState } from "react";
// import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
// import { FaCode } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdReorder } from 'react-icons/md'
import "./navbarCommon.css";

const NavbarCommon = () => {
  const [expandNavbar, setExpandNavbar] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className="navbarCommon" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => {
          setExpandNavbar((prev) => !prev)
        }}><MdReorder/></button>
      </div>
      <div className="navbar-links">
        <Link to="/" className="link">
          {/* <AiOutlineHome /> */}
        <h4>Home</h4>
        {/* Home */}
        </Link>
        {/* <Link to="/about" className="link"> */}
          {/* <AiOutlineUser /> */}
        {/* About */}
        {/* </Link> */}
        <Link to="/portfolio" className="link">
          {/* <FaCode /> */}
        {/* <h4>Projects</h4> */}
        </Link>
        <Link to="/workExperience" className="link">
          {/* <FaCode /> */}
        <h4>Work Experience</h4>
        </Link>
      </div>
    </div>
  );
};

export default NavbarCommon;
