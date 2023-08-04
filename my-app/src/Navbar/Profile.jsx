import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  const initialFormState = {
    Age: "",
    Bio: "",
    FavoriteQuote: "",
    SocialHandles: "",
    Education: "",
  };
  const [form, setForm] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="userProfile">
      <h2>Welcome, {user.username}!</h2>
      <form>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
