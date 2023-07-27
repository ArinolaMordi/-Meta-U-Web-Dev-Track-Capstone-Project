import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useState, useEffect } from "react";
import Badges from "./NavBar/Badges";
import Home from "./NavBar/Home";
import LoginForm from "./NavBar/LoginForm";
import Navbar from "./NavBar/Navbar";
import React from "react";
import Resources from "./NavBar/Resources";
import SignupForm from "./NavBar/SignUpForm";
import Recommendation from "./Recommendation";
import MapView from "./MapView";



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

  const [watchedVideosCount, setWatchedVideosCount] = useState(0);
  const [ttvideos, setTTVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:3000/videos");
        const data = await response.json();
        setTTVideos(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchVideos();
  }, []);
  const handleVideoWatched = (videoId) => {
    setWatchedVideosCount((prevCount) => prevCount + 1);
    // Perform any other logic related to marking the video as watched
    console.log(`Video ${videoId} marked as watched`);
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
            <Route path ="/maps" element= {<MapView/>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
