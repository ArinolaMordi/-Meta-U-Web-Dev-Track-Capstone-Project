import "./SignUpForm.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.js";
import React, { useContext, useState } from "react";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        const loggedInUser = data.user;

        console.log("Signup successful");

        setUsername("");
        setEmail("");
        setPassword("");

        updateUser(loggedInUser);

        navigate("/profile");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      alert("Signup failed: " + error);
    }
  };

  return (
    <div className="signupFormContainer">
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/rainbow-frame-background-blue-aesthetic-grid-pattern-with-cute-doodle-vector_53876-151424.jpg?w=1380&t=st=1691169765~exp=1691170365~hmac=3beda00320e6813b543c607cd4314f447391559070c68766d49870ec93381ccd")`,
        }}
      >
        <form className="signupForm" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="formGroup">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <Link to="/login">Log In </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
