import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Badges from "./Navbar/Badges";
import Resources from "./Navbar/Resources";
import SignIn from "./Navbar/SignIn";
import Home from "./Navbar/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/badges" element={<Badges />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
