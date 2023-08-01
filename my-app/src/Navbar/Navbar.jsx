import "./NavBar.css";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
import React from "react";
export default function Navbar() {
  return (
    <div className="navBar">
      <h1
        className="header"
        style={{ textDecoration: "none", marginRight: "600px" }}
      >
        Tiny Thinkers <HiOutlineLightBulb />
      </h1>
      <Link to="/" className="navLinks">
        Home
      </Link>
      <Link to="/badges" className="navLinks">
        Badges
      </Link>
      <Link to="/resources" className="navLinks">
        Resources
      </Link>
      <Link to="/signup" className="navLinks">
        Sign Up
      </Link>
      <Link to="/maps" className="navLinks">
        Find a Tiny Thinker
      </Link>
    </div>
  );
}
