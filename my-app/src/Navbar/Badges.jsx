import "./Badges.css";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { LiaIdBadgeSolid } from "react-icons/lia";
import { useState, useEffect } from "react";
import React from "react";

export default function Badges({ watchedVideosCount }) {
  const [challengePatchesgotten, setChallengePatchesgotten] = useState(false);
  const [blackholegotten, setBlackholegotten] = useState(false);
  const [sunbadgegotten, setSunbagdegotten] = useState(false);
  const [earthbadgegotten, setEarthbadgegotten] = useState(false);
  const [moonbadgegotten, setMoonbagdegotten] = useState(false);
  const [meteoritebadgesgotten, setMeteoritebadgesgotten] = useState(false);
  const [showmessage, setShowmessage] = useState(false);
  const handleBadges = () => {
    if (watchedVideosCount >= 5) {
      setChallengePatchesgotten(true);
    } else {
      setChallengePatchesgotten(false);
      setShowmessage(true);
    }
    if (watchedVideosCount >= 10) {
      setBlackholegotten(true);
    } else {
      setBlackholegotten(false);
      setShowmessage(true);
    }
    if (watchedVideosCount >= 15) {
      setSunbagdegotten(true);
    } else {
      setSunbagdegotten(false);
      setShowmessage(true);
    }
    if (watchedVideosCount >= 20) {
      setEarthbadgegotten(true);
    } else {
      setEarthbadgegotten(false);
      setShowmessage(true);
    }
    if (watchedVideosCount >= 25) {
      setMoonbagdegotten(true);
    } else {
      setMoonbagdegotten(false);
      setShowmessage(true);
    }
    if (watchedVideosCount >= 30) {
      setMeteoritebadgesgotten(true);
    } else {
      setMeteoritebadgesgotten(false);
      setShowmessage(true);
    }
  };

  useEffect(() => {
    console.log("watchedVideosCount:", watchedVideosCount);
    if (watchedVideosCount >= 5) {
      setChallengePatchesgotten(true);
    } else {
      setChallengePatchesgotten(false);
    }
    if (watchedVideosCount >= 10) {
      setBlackholegotten(true);
    } else {
      setBlackholegotten(false);
    }
    if (watchedVideosCount >= 15) {
      setSunbagdegotten(true);
    } else {
      setSunbagdegotten(false);
    }
    if (watchedVideosCount >= 20) {
      setEarthbadgegotten(true);
    } else {
      setEarthbadgegotten(false);
    }
    if (watchedVideosCount >= 25) {
      setMoonbagdegotten(true);
    } else {
      setMoonbagdegotten(false);
    }
    if (watchedVideosCount >= 30) {
      setMeteoritebadgesgotten(true);
    } else {
      setMeteoritebadgesgotten(false);
    }
  });

  return (
    <div className="theWhole">
      <h1 className="headerWords">
        Badges <LiaIdBadgeSolid />
      </h1>

      <div className="generalDiv">
        <div className="badges">
          <img
            alt="challengePatches"
            className="badgeCategoryImage"
            src="https://cdn.kastatic.org/images/badges/master-challenge-blue-medium.png"
            style={{ width: "200px", height: "200px" }}
          />
          <h4 className="words">Challenge Patches</h4>

          <button className="dropDownBtn" onClick={handleBadges}>
            Click here to see your progress
            <IoMdArrowDropdownCircle size={30} color="white" />
          </button>

          <div>
            {challengePatchesgotten ? (
              <p>
                Congrats! You've earned the Challenge Patches badge. Challenge
                Patches are special awards for completing the first 5 video
                challenges.
              </p>
            ) : (
              <p>{showmessage ? "You are not there yet. Keep going!" : ""}</p>
            )}
          </div>
        </div>

        <div className="badges">
          <img
            alt="blackHoleBadges"
            className="badgeCategoryImage"
            src="https://cdn.kastatic.org/images/badges/eclipse-medium.png"
            style={{ width: "200px", height: "200px" }}
          />

          <h4 className="words">Black Hole Badges</h4>
          <button className="dropDownBtn" onClick={handleBadges}>
            Click here to see your progress{" "}
            <IoMdArrowDropdownCircle size={30} color="white" />
          </button>

          <div>
            {blackholegotten ? (
              <p>Congrats! You've earned the Black Hole Badges. </p>
            ) : (
              <p>
                {showmessage
                  ? "Black Hole badges are a symbol of deep knowledge and mastery. Keep exploring!"
                  : ""}
              </p>
            )}
          </div>
        </div>

        <div className="badges">
          <img
            alt="sunBadges"
            className="badgeCategoryImage"
            src="https://cdn.kastatic.org/images/badges/sun-medium.png"
            style={{ width: "200px", height: "200px" }}
          />

          <h4 className="words">Sun Badges</h4>
          <button className="dropDownBtn" onClick={handleBadges}>
            Click here to see your progress{" "}
            <IoMdArrowDropdownCircle size={30} color="white" />
          </button>

          <div>
            {sunbadgegotten ? (
              <p>
                Congrats! You've earned the Sun Badge. Sun badges symbolize
                brightness and knowledge. Keep shining!"{" "}
              </p>
            ) : (
              <p>
                {showmessage
                  ? "Keep pushing forward! You're getting closer to earning it!"
                  : ""}
              </p>
            )}
          </div>
        </div>

        <div className="badges">
          <img
            alt="earthBadges"
            className="badgeCategoryImage"
            src="https://cdn.kastatic.org/images/badges/earth-medium.png"
            style={{ width: "200px", height: "200px" }}
          />
          <h4 className="words"> Earth Badges</h4>
          <button className="dropDownBtn" onClick={handleBadges}>
            Click here to see your progress{" "}
            <IoMdArrowDropdownCircle size={30} color="white" />
          </button>

          <div>
            {earthbadgegotten ? (
              <p>Congrats! You've earned the Earth Badges. </p>
            ) : (
              <p>
                {showmessage
                  ? "Earth badges are rare. They require a significant amount of learning. Keep going!"
                  : ""}
              </p>
            )}
          </div>
        </div>

        <div className="badges">
          <img
            alt="moonBadges"
            className="badgeCategoryImage"
            src="https://cdn.kastatic.org/images/badges/moon-medium.png"
            style={{ width: "200px", height: "200px" }}
          />
          <h4 className="words">Moon Badges</h4>
          <button className="dropDownBtn" onClick={handleBadges}>
            Click here to see your progress{" "}
            <IoMdArrowDropdownCircle size={30} color="white" />
          </button>

          <div>
            {moonbadgegotten ? (
              <p>Congrats! You've earned the Moon Badges. </p>
            ) : (
              <p>
                {showmessage
                  ? "Moon badges are a symbol of dedication and progress. You're getting closer!"
                  : ""}
              </p>
            )}
          </div>
        </div>

        <div className="badges">
          <img
            alt="meteoriteBadges"
            className="badgeCategoryImage"
            src="https://cdn.kastatic.org/images/badges/meteorite-medium.png"
            style={{ width: "200px", height: "200px" }}
          />
          <h4 className="words">Meteorite Badges</h4>
          <button className="dropDownBtn" onClick={handleBadges}>
            Click here to see your progress{" "}
            <IoMdArrowDropdownCircle size={30} color="white" />
          </button>

          <div>
            {meteoritebadgesgotten ? (
              <p>Congrats! You've earned the Meteorite Badges. </p>
            ) : (
              <p>
                {showmessage
                  ? "Meteorite badges are a mark of exceptional achievement. Keep pushing yourself!"
                  : ""}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
// Bagdes were gotten from https://www.khanacademy.org/badges
