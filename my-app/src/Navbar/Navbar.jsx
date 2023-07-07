
import { Link } from 'react-router-dom';
import React from "react";
import "./NavBar.css"


export default function Navbar() {
  return (
    <div className="NavBar">
      <h1 className='Header'>Tiny Thinkers ❤️</h1>
  <Link to="/" className="navLinks">Home</Link>
  <Link to="/badges" className="navLinks">Badges</Link>
  <Link to="/resources" className="navLinks">Resources</Link>
  <Link to="/signin" className="navLinks">Sign in</Link>
  
    </div>
  );
}
