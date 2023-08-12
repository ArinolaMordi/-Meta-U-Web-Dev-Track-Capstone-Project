import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  const [profiles, setProfiles] = useState([]);
  const [saved, setSaved] = useState();
  const initialFormState = {
    Age: "",
    Bio: "",
    FavoriteQuote: "",
    SocialHandles: "",
    Education: "",
  };
  const [form, setForm] = useState(initialFormState);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userId = user.id;
      const updatedForm = { ...form, userId };
      const formData = new FormData();

      formData.append("Age", form.Age);
      formData.append("Bio", form.Bio);
      formData.append("FavoriteQuote", form.FavoriteQuote);
      formData.append("SocialHandles", form.SocialHandles);
      formData.append("Education", form.Education);
      formData.append("userId", userId);

      const response = await fetch("http://localhost:3000/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedForm),
      });
      setSaved(true);
      if (!response.ok) {
        throw new Error("Failed to save the project data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("http://localhost:3000/profile");
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };
    fetchProfiles();
  }, []);

  if (!user) {
    navigate("/");
    return null;
  }
  return (
    <div className="userProfile">
      <h1 style={{ marginLeft: "30px", textDecoration: "none" }}>
        Welcome, {user.username}!
      </h1>
      {profiles.map((profile) => (
        <div key={profile.id}>
          {profile.userId === user.id ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "39px",
                border: "20px solid white", 
                padding: "20px",
                margin: "10px", 
              
                
              }}
            >
              <h3>Age: {profile.Age}</h3>
              <h3>Bio: {profile.Bio}</h3>
              <h3>Favorite Quote: {profile.FavoriteQuote}</h3>
              <h3>Social Handles: {profile.SocialHandles}</h3>
              <h3>Education: {profile.Education}</h3>
            </div>
          ) : null}
        </div>
      ))}
      {profiles.every((profile) => profile.userId !== user.id) && (
        <div>
          <form
            onSubmit={handleSubmit}
            method="post"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2 style={{ textDecoration: "none", color: "black" }}>
              Complete your profile{" "}
            </h2>
            <label>
              Age:
              <input
                type="number"
                name="Age"
                value={form.Age}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Bio:
              <textarea name="Bio" value={form.Bio} onChange={handleChange} />
            </label>
            <br />
            <label>
              Favorite Quote:
              <input
                type="text"
                name="FavoriteQuote"
                value={form.FavoriteQuote}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Social Handles:
              <input
                type="text"
                name="SocialHandles"
                value={form.SocialHandles}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Education:
              <input
                type="text"
                name="Education"
                value={form.Education}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit" disabled={saved}>
              {saved ? "Saved" : "Save"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
