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
      setSaved(true)
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
      <h2>Welcome, {user.username}!</h2>
      {profiles.map((profile) => (
        <div key={profile.id}>
          {profile.userId === user.id ? (
            <div>
              <p>Age: {profile.Age}</p>
              <p>Bio: {profile.Bio}</p>
              <p>Favorite Quote: {profile.FavoriteQuote}</p>
              <p>Social Handles: {profile.SocialHandles}</p>
              <p>Education: {profile.Education}</p>
            </div>
          ) : null}
        </div>
      ))}
      {profiles.every((profile) => profile.userId !== user.id) && (
        <form onSubmit={handleSubmit} method="post">
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
      )}
    </div>
  );
}
