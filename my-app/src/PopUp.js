import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import React, { useRef, useState } from "react";

import "./PopUp.css";

const libraries = ["places"];

export default function PopUp({ isOpen, onClose }) {
  const initialFormState = {
    ProjectName: "",
    Describe: "",
    Location: "",
    Image: null,
  };

  const [form, setForm] = useState(initialFormState);
  const autocompleteRef = useRef(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCIdAofDyeBU8kc9VcVfBPGa30voIG7klc",
    libraries,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();

      formData.append("ProjectName", form.ProjectName);
      formData.append("Describe", form.Describe);
      formData.append("Location", form.Location);
      formData.append("Image", form.Image);

      const response = await fetch("http://localhost:3000/uploads", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to save the project data.");
      }

      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();

    if (place) {
      const { formatted_address } = place;
      setForm((prevForm) => ({
        ...prevForm,
        Location: formatted_address,
      }));
    }
  };
  

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const inputValue = type === "file" ? event.target.files[0] : value;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: inputValue,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>
          Close
        </button>
        <h1>Upload your project and view on the map!</h1>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          method="post"
        >
          <label>Name of project:</label>
          <input
            type="text"
            name="ProjectName"
            value={form.ProjectName}
            onChange={handleChange}
          />
          <label>Describe your project:</label>
          <input
            type="text"
            name="Describe"
            value={form.Describe}
            onChange={handleChange}
          />

          <label>Location:</label>
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              name="Location"
              value={form.Location}
              onChange={handleChange}
            />
          </Autocomplete>

          <label>Upload Image</label>
          <input type="file" name="Image" onChange={handleChange} />

          <button type="submit" value="Upload">
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
