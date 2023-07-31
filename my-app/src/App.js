import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import Badges from "./NavBar/Badges";
import Home from "./NavBar/Home";
import LoginForm from "./NavBar/LoginForm";
import MapView from "./MapView";
import Navbar from "./NavBar/Navbar";
import React from "react";
import Recommendation from "./Recommendation";
import Resources from "./NavBar/Resources";
import SignupForm from "./NavBar/SignUpForm";

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const [watchedVideosCount, setWatchedVideosCount] = useState(0);
  const handleVideoWatched = (videoId) => {
    setWatchedVideosCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <UserContext.Provider value={{ user, updateUser }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              path="/badges"
              element={<Badges watchedVideosCount={watchedVideosCount} />}
            />
            <Route
              path="/resources"
              element={
                <Resources
                  handleVideoWatched={handleVideoWatched}
                  watchedVideosCount={watchedVideosCount}
                />
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/recommendations" element={<Recommendation />} />
            <Route path="/maps" element={<MapView />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
