import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Badges from "./Navbar/Badges";
import Resources from "./Navbar/Resources";
import Home from "./Navbar/Home";
import SignupForm from "./Navbar/SignUpForm";
import LoginForm from "./Navbar/LoginForm";

function App() {
  const [user, setUser] = useState(() => {
    // Retrieve the user data from storage or set it to null if not found
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  useEffect(() => {
    // Save the user data to storage whenever the user state changes
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div>
      <UserContext.Provider value={{ user, updateUser }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/badges" element={<Badges />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
