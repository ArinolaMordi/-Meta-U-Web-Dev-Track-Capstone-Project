import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="posterVideo">
      <video className="videoDiv" preload="auto" autoPlay loop muted>
        <source
          src="https://cdn.shopify.com/videos/c/o/v/fe38a8d2e6b44a0db0c930ff2d72b65a.mp4"
          type="video/mp4"
          // Video gotten from "https://www.crunchlabs.com/"
        />
      </video>
      <p>THINK LIKE AN ENGINEER</p>
    </div>
  );
}
