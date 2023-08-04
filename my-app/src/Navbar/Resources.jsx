import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import PopUp from "../PopUp";
import "./Resources.css";

export default function Resources({ handleVideoWatched, watchedVideosCount }) {
  const [ttvideos, setTTVideos] = useState([]);
  const [uploadfeature, setUploadFeature] = useState(false);
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
  const handleMarkAsWatched = (videoId) => {
    handleVideoWatched(videoId);

    setTTVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoId ? { ...video, isWatched: true } : video
      )
    );
  };
  const handleUpload = () => {
    setUploadFeature(!uploadfeature);
  };

  return (
    <div className="videos">
      <h1> Resources </h1>
      <Link to="/recommendations">Daily Recommendations</Link>
      <div className="videosGrid">
        {ttvideos.map((ttvideo) => (
          <div className="videosCard" key={ttvideo.id}>
            <iframe
              width="400"
              height="315"
              className="videoPlayer"
              src={ttvideo.YoutubeVideos}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="description">{ttvideo.Description}</p>
            <button
              onClick={() => {
                window.alert("You are about to mark this video as watched.");
                handleMarkAsWatched(ttvideo.id);
              }}
              className={`watchedButton ${ttvideo.isWatched ? "disabled" : ""}`}
              disabled={ttvideo.isWatched}
            >
              {ttvideo.isWatched ? "Watched" : "Mark as Watched"}
            </button>
          </div>
        ))}
      </div>
      <div>
        <p className="tinyThinker">
          Hey Tiny Thinker ! Congratulations on completing the videos Upload
          your image here !
          <button
            onClick={handleUpload}
            type="UploadButton"
            className="uploadBtn"
          >
            Upload here
          </button>
        </p>
        <PopUp isOpen={uploadfeature} onClose={() => setUploadFeature(false)} />
      </div>
    </div>
  );
}
