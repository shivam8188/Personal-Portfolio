import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaReact} from 'react-icons/fa'
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import "./navbar.css";
const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT",
    to: "/about",
  },

  {
    label: "PROJECT",
    to: "/project",
  },
  {
    label: "SKILL",
    to: "/skill",
  },
  
  {
    label: "CONTACT",
    to: "/contact",
  },
];
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const teggleIconHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-1">
            <FaReact/>
          </Link>
        </div>
        <ul className={`navbar-menu ${toggle ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="menu-li-item">
              <Link to={item.to} className="menu-item-links">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu-icon" onClick={teggleIconHandler}>
          {toggle ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
