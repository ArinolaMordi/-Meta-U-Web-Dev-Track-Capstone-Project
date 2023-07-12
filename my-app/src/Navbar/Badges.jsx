import React from "react";

export default function Badges() {
  return (
   <div> <h1>Badges </h1>
    <div className="generalDiv">
       <div className="achievementLabel">
        <img
          alt="challengePatches"
          className="badgeCategoryImage"
          src="https://cdn.kastatic.org/images/badges/master-challenge-blue-medium.png"
        />
        Challenge Patches
      </div>

      <div className="achievementLabel">
        <img
          alt="blackHoleBadges"
          className="badgeCategoryImage"
          src="https://cdn.kastatic.org/images/badges/eclipse-medium.png"
        />
        Black Hole Badges
      </div>

      <div className="achievementLabel">
        <img
          alt="sunBadges"
          className="badgeCategoryImage"
          src="https://cdn.kastatic.org/images/badges/sun-medium.png"
        />
        Sun Badges
      </div>

      <div className="achievementLabel">
        <img
          alt="earthBadges"
          className="badgeCategoryImage"
          src="https://cdn.kastatic.org/images/badges/earth-medium.png"
        />
        Earth Badges
      </div>

      <div className="achievementLabel">
        <img
          alt="moonBadges"
          className="badgeCategoryImage"
          src="https://cdn.kastatic.org/images/badges/moon-medium.png"
        />
        Moon Badges
      </div>

      <div className="achievementLabel">
        <img
          alt="meteoriteBadges"
          className="badgeCategoryImage"
          src="https://cdn.kastatic.org/images/badges/meteorite-medium.png"
        />
        Meteorite Badges
      </div>
    </div>
    </div>
  );
}
// Bagdes were gotten from https://www.khanacademy.org/badges