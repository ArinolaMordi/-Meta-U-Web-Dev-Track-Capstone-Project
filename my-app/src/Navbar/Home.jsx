import React from "react";
import "./Home.css";
import engineering from "../engineering.jpg";
import explore from "../explore.jpg";
import ligthbulb from "../lightbulb.jpg";

export default function Home() {
  return (
    <div>
      <div className="posterVideo">
        <video className="videoDiv" preload="auto" autoPlay loop muted>
          <source
            src="https://cdn.shopify.com/videos/c/o/v/fe38a8d2e6b44a0db0c930ff2d72b65a.mp4"
            type="video/mp4"
            img
            // Video gotten from "https://www.crunchlabs.com/"
          />
        </video>
      </div>

     
    <div>
      <h1>How it works here !</h1>
      <div className="theHow">
        <h2>DISCOVER</h2>
        <img
          src={engineering}
          alt="Engineering"
          style={{ height: "300px", width: "300px" }}
        />
        {/* image gotten from https://kidsdiscover.com/shop/issues/engineering-for-kids/
         */}
        <h2>EXPLORE</h2>
        <img
          src={explore}
          alt="explore"
          style={{ height: "300px", width: "300px" }}
        />
        {/* image gotten from https://www.gettyimages.fi/photos/discover-engineering-family-day */}

        <h2>THINK LIKE AN ENGINEER</h2>
        <img
          src={ligthbulb}
          alt="Thinking "
          style={{ height: "300px", width: "300px" }} />

        {/* // image gotten from https://www.alamy.com/funny-child-boy-student-with-lightbulb-brainstorming-and-idea-concept-image248752105.html */}
      </div>
      </div>
    </div>
  );
}
