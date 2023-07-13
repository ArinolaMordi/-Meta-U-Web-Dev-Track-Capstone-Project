import React from "react";
import { useState, useEffect } from "react";

export default function Badges({ watchedVideosCount }) {
  const [challengePatchesgotten, setChallengePatchesgotten] = useState(false);
  const [blackholegotten, setBlackholegotten] = useState(false);
  const [sunbadgegotten, setSunbagdegotten] = useState(false);
  const [earthbadgegotten, setEarthbadgegotten] = useState(false);
  const [moonbadgegotten, setMoonbagdegotten] = useState(false);
  const [meteoritebadgesgotten, setMeteoritebadgesgotten] = useState(false);
  useEffect(() => {
    console.log("watchedVideosCount:", watchedVideosCount);
    if (watchedVideosCount >= 5) {
      setChallengePatchesgotten(true);
    }
    if (watchedVideosCount >= 10) {
      setBlackholegotten(true);
    }
    if (watchedVideosCount >= 15) {
      setSunbagdegotten(true);
    }
    if (watchedVideosCount >= 20) {
      setEarthbadgegotten(true);
    }
    if (watchedVideosCount >= 25) {
      setMoonbagdegotten(true);
    }
    if (watchedVideosCount >= 30) {
      setMeteoritebadgesgotten(true);
    }
  });

  return (
    <div>
      <h1>Badges </h1>
      <div className="generalDiv">
        <div className="achievementLabel">
          <img
            alt="challengePatches"
            className="badgeCategoryImage"
            src="https://cdn.kastatic.org/images/badges/master-challenge-blue-medium.png"
          />
          {challengePatchesgotten && (
            <h1>Congratulations on achieving the Challenge Patch ! </h1>
          )}
          Challenge Patches
        </div>

        <div className="achievementLabel">
          <img
            alt="blackHoleBadges"
            className="badgeCategoryImage"
            src="https://cdn.kastatic.org/images/badges/eclipse-medium.png"
          />
          {blackholegotten && (
            <h1>Congratulations on achieving the Black Hole Badge ! </h1>
          )}
          Black Hole Badges
        </div>

        <div className="achievementLabel">
          <img
            alt="sunBadges"
            className="badgeCategoryImage"
            src="https://cdn.kastatic.org/images/badges/sun-medium.png"
          />
          {sunbadgegotten && (
            <h1>Congratulations on achieving the Sun Badge ! </h1>
          )}
          Sun Badges
        </div>

        <div className="achievementLabel">
          <img
            alt="earthBadges"
            className="badgeCategoryImage"
            src="https://cdn.kastatic.org/images/badges/earth-medium.png"
          />
          {earthbadgegotten && (
            <h1>Congratulations on achieving the earth Badge ! </h1>
          )}
          Earth Badges
        </div>

        <div className="achievementLabel">
          <img
            alt="moonBadges"
            className="badgeCategoryImage"
            src="https://cdn.kastatic.org/images/badges/moon-medium.png"
          />
          {moonbadgegotten&& (
            <h1>Congratulations on achieving the moon Badge ! </h1>
          )}
          Moon Badges
        </div>

        <div className="achievementLabel">
          <img
            alt="meteoriteBadges"
            className="badgeCategoryImage"
            src="https://cdn.kastatic.org/images/badges/meteorite-medium.png"
          />
          {meteoritebadgesgotten && ( 
            <h1>Congratulations on achieving the meteorite badge ! You have now attained all the badges possible. Great work done !</h1>
          )}
          Meteorite Badges
        </div>
      </div>
    </div>
  );
}
// Bagdes were gotten from https://www.khanacademy.org/badges