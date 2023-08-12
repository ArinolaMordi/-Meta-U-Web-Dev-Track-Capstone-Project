import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.js";
import "./LoginForm.css"

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        const loggedInUser = data.user;

        updateUser(loggedInUser);

        navigate("/profile");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert("Login failed: " + error);
    }
  };

  return (
    <div className="loginFormContainer">
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/rainbow-frame-background-blue-aesthetic-grid-pattern-with-cute-doodle-vector_53876-151424.jpg?w=1380&t=st=1691169765~exp=1691170365~hmac=3beda00320e6813b543c607cd4314f447391559070c68766d49870ec93381ccd")`,
        }}
      >
      <form className="loginForm" onSubmit={handleLogin}>
        <h1 style={{textDecoration:"none"}}>Welcome Back !</h1>
        <br></br>
        <h2>Login</h2>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p>
          New to the app? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
      </div>
    </div>
  );
};

export default LoginForm;
