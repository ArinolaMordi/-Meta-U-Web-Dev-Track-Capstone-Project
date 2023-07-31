import React from "react";

import engineering from "../engineering.jpg";
import explore from "../explore.jpg";
import ligthbulb from "../lightbulb.jpg";
import "./Home.css";

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
        <div className="overLay" style={{ fontFamily: "fantasy" }}>
          <h2>
            Curiosity is what makes you look at the world and ask yourself why.
            It is what makes you dig deeper into a subject and motivates you to
            learn about things.
          </h2>
          <br></br>
          <h3 style={{ marginLeft: "20px" }}>
            “Wonder is the beginning of wisdom.” - Socrates{" "}
          </h3>
        </div>
      </div>
      <div className="WelcomeDiv">
        <h1
          className="Welcome"
          style={{
            fontFamily: "fantasy",
            backgroundColor: "#f0f8ff",
            maxWidth: "600px",
            padding: "20px",
          }}
        >
          About Us
          <h3>
            My website was founded with one goal in mind: providing children
            from all walks of life with an affordable, user-friendly learning
            platform. Our innovative tutorials give our users the opportunity to
            expand their horizon and learn new skills.
          </h3>
        </h1>

        <img
          src="https://img.freepik.com/free-vector/forming-team-leadership-concept-illustration_114360-13973.jpg"
          alt="About us Vectors Illustrations "
          style={{ width: "700px", height: "600px" }}
        ></img>
        {/* image gotten from https://www.freepik.com/vectors/about-us */}
      </div>

      <div className="theHowGeneralDiv">
        <h1 style={{ marginLeft: "540px", fontFamily: "fantasy" }}>
          How it works here !
        </h1>
        <div className="theHow">
          <div className="Images">
            <img
              src={engineering}
              alt="Engineering"
              style={{ height: "300px", width: "300px" }}
            />{" "}
            <h2 style={{ fontFamily: "fantasy" }}>DISCOVER</h2>{" "}
          </div>
          {/* image gotten from https://kidsdiscover.com/shop/issues/engineering-for-kids/
           */}

          <div className="Images">
            <img
              src={explore}
              alt="explore"
              style={{ height: "300px", width: "300px" }}
            />{" "}
            <h2 style={{ fontFamily: "fantasy" }}>EXPLORE</h2>{" "}
          </div>
          {/* image gotten from https://www.gettyimages.fi/photos/discover-engineering-family-day */}

          <div className="Images">
            <img
              src={ligthbulb}
              alt="Thinking "
              style={{ height: "300px", width: "300px" }}
            />
            <h2 style={{ fontFamily: "fantasy" }}>THINK LIKE AN ENGINEER</h2>{" "}
          </div>
          {/* // image gotten from https://www.alamy.com/funny-child-boy-student-with-lightbulb-brainstorming-and-idea-concept-image248752105.html */}
        </div>
      </div>
    </div>
  );
}
