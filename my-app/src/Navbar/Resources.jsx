import React from "react";
import { useState, useEffect } from "react";
import "./Resources.css";
import Badges from "./Badges";

export default function Resources({ handleVideoWatched , watchedVideosCount}) {
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

  return (
    <div className="videos">
      <h1> Resources </h1>
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
              onClick={() => handleVideoWatched(ttvideo.id)}
              className="watchedButton"
            >
              Mark as Watched
            </button>
          </div>
        ))}
      </div>
      <div>
        <p className="tinyThinker">
          Hey Tiny Thinker ! Congratulations on completing the videos Upload
          your image here !
          <button type="UploadButton" className="uploadBtn">
            Upload here
          </button>
        </p>
      </div>
    </div>
  );
}
