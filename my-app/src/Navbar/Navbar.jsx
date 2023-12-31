import "./NavBar.css";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import React from "react";

export default function Navbar({ handleLogout }) {
  const { user } = useContext(UserContext);
  const handleFeaturesClick = (e) => {
    if (!user) {
      e.preventDefault();
      alert(
        " Hey there 😊 ! Please log in or sign up first before getting started."
      );
    }
  };
  return (
    <div className="navBar">
      <h1
        className="header"
        style={{ textDecoration: "none", marginRight: "480px" }}
      >
        {" "}
        Tiny Thinkers <HiOutlineLightBulb />
      </h1>
      <Link to="/" className="navLinks">
        Home
      </Link>
      <Link to="/badges" className="navLinks" onClick={handleFeaturesClick}>
        Badges
      </Link>
      <Link to="/resources" className="navLinks" onClick={handleFeaturesClick}>
        Resources
      </Link>
      <Link to="/maps" className="navLinks" onClick={handleFeaturesClick}>
        Find a Tiny Thinker
      </Link>
      {user ? (
        <>
          <Link to="/profile" className="navLinks">
            Hi {user.username}!{" "}
          </Link>
          <button onClick={handleLogout} className="navLinks">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/signup" className="navLinks">
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
}
