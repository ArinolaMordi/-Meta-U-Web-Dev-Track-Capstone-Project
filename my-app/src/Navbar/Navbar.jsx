import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Navbar() {
  return (
    <div className="navBar">
      <h1 className="header">
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
        Sign Up{" "}
      </Link>
    </div>
  );
}
