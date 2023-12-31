import "./Recommendation.css";
import { useState } from "react";
import React from "react";

export default function Recommendation() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const handleDifficulty = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const handleAgeGroup = (event) => {
    setSelectedAgeGroup(event.target.value);
  };

  const interests = [
    { id: 1, name: "DIY Vacuum Cleaner and Appliances" },
    { id: 2, name: "3D Printing and CAD Software" },
    { id: 3, name: "Simple Electronics and Remote-Controlled Devices" },
    { id: 4, name: "Robotics and Mechanical Engineering" },
    { id: 5, name: "Science and Technology Projects for Kids" },
  ];
  const handleInterest = (event) => {
    const interest = event.target.value;
    const newSelectedInterests = selectedInterests.includes(interest)
      ? selectedInterests.filter((item) => item !== interest)
      : [...selectedInterests, interest];
    setSelectedInterests(newSelectedInterests);
  };
  const handleSubmit = async () => {
    if (
      !selectedDifficulty ||
      !selectedAgeGroup ||
      selectedInterests.length === 0
    ) {
      alert(
        "Please select the required fields before getting recommendations."
      );
      return;
    }

    const queryParams = new URLSearchParams({
      Difficulty: selectedDifficulty,
      AgeGroup: selectedAgeGroup,
      Interests: selectedInterests.join(" , "),
    }).toString();

    try {
      const response = await fetch(
        `http://localhost:3000/recommendations?${queryParams}`
      );

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <div className="generalDiv">
      <div className="sideBar">
        <div>
          <h1 style={{ textDecoration: "none" }}>Recommendations for you</h1>
        </div>
        <div>
          <h3>Select Your Difficulty Level</h3>
          <label>
            <input
              type="checkbox"
              value="Beginner"
              checked={selectedDifficulty === "Beginner"}
              onChange={handleDifficulty}
            />
            Beginner
          </label>
          <label>
            <input
              type="checkbox"
              value="Intermediate"
              checked={selectedDifficulty === "Intermediate"}
              onChange={handleDifficulty}
            />
            Intermediate
          </label>
          <label>
            <input
              type="checkbox"
              value="Hard"
              checked={selectedDifficulty === "Hard"}
              onChange={handleDifficulty}
            />
            Hard
          </label>
        </div>
        <div>
          <h3>Select Your Age Group</h3>
          <label>
            <input
              type="checkbox"
              value="5-7"
              checked={selectedAgeGroup === "5-7"}
              onChange={handleAgeGroup}
            />
            Age 5-7
          </label>
          <label>
            <input
              type="checkbox"
              value="7-9"
              checked={selectedAgeGroup === "7-9"}
              onChange={handleAgeGroup}
            />
            Age 7-9
          </label>
          <label>
            <input
              type="checkbox"
              value="9-11"
              checked={selectedAgeGroup === "9-11"}
              onChange={handleAgeGroup}
            />
            Age 9-11
          </label>
        </div>
        <div>
          <h3>Select Interests:</h3>
          <div className="interestsAlign">
            {interests.map((interest) => (
              <label key={interest.id}>
                <input
                  type="checkbox"
                  value={interest.name}
                  checked={selectedInterests.includes(interest.name)}
                  onChange={handleInterest}
                />
                {interest.name}
              </label>
            ))}
          </div>
        </div>
        <button onClick={handleSubmit}>Get Recommendations</button>
      </div>

      <div className="content">
        {recommendations.map((video) => (
          <div key={video.id}>
            <iframe
              width="410"
              height="410.5"
              src={video.YoutubeVideos}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "40px" }}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
