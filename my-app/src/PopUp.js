import React, { useState } from "react";

import "./PopUp.css";

export default function PopUp({ onClose }) {
  return (
    <div className="modal">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>
          Close
        </button>
        <h1>Upload your project and view on the map!</h1>

        <form>
          <label>Name of project:</label>
          <input type="text" name="ProjectName" />
          <label>Describe your project:</label>
          <input type="text" name="Describe" />

          <label>
            Location:
            <input type="text" name="Location" />
          </label>

          <label>Upload Image</label>
          <input type="file" name="Image" />

          <button type="submit" value="Upload">
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
