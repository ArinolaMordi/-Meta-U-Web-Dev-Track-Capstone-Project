import "./Home.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import engineering from "../engineering.jpg";
import explore from "../explore.jpg";
import ligthbulb from "../lightbulb.jpg";
import React from "react";

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
        <h1 style={{ fontFamily: "fantasy" }}>How it works here !</h1>
        <div className="theHow">
          <div className="images">
            <img
              src={engineering}
              alt="Engineering"
              style={{ height: "300px", width: "300px" }}
            />{" "}
            <h2 style={{ fontFamily: "fantasy" }}>DISCOVER</h2>{" "}
          </div>
          {/* image gotten from https://kidsdiscover.com/shop/issues/engineering-for-kids/
           */}

          <div className="images">
            <img
              src={explore}
              alt="explore"
              style={{ height: "300px", width: "300px" }}
            />{" "}
            <h2 style={{ fontFamily: "fantasy" }}>EXPLORE</h2>{" "}
          </div>
          {/* image gotten from https://www.gettyimages.fi/photos/discover-engineering-family-day */}

          <div className="images">
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
      <div className="features">
        <div className="feature">
          <h2>Badges</h2>
          <p style={{ fontFamily: "fantasy" }}>
            Cool badges you get awarded when you watch and complete videos!
          </p>
          <div className="linkBox">
            {" "}
            <a
              href="/badges"
              style={{ fontFamily: "fantasy", marginLeft: "20px" }}
            >
              Go to Badges
            </a>
          </div>
        </div>

        <div className="feature">
          <h2>Resources</h2>
          <p style={{ fontFamily: "fantasy" }}>
            Check out our cool video resources that expose you to new concepts.
          </p>
          <div className="linkBox">
            {" "}
            <a
              href="/resources"
              style={{ fontFamily: "fantasy", marginLeft: "20px" }}
            >
              Go to Resources
            </a>
          </div>
        </div>

        <div className="feature">
          <h2>Map View</h2>
          <p style={{ fontFamily: "fantasy" }}>
            Explore the map view of all Tiny Thinkers and their uploaded
            projects.
          </p>
          <div className="linkBox">
            {" "}
            <a
              href="/maps"
              style={{ fontFamily: "fantasy", marginLeft: "20px" }}
            >
              {" "}
              Go to Map View
            </a>
          </div>
        </div>
      </div>
      <footer className="footer" style={{ alignItems: "center" }}>
        <div className="footerImage" style={{ marginTop: "20pX" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0634/1535/3575/files/footer-logo.svg?v=1651040243"
            alt="CrunchLabs"
            width="200"
            height="80"
            style={{ backgroundColor: "#00416c", borderRadius: "30px" }}
          />
          <h3 style={{ marginLeft: "50px", color: "#00416c" }}> THINK </h3>
          <h3>
            LIKE AN ENGINEER
            <br></br>
            The Tiny Thinkers Family <HiOutlineLightBulb />
          </h3>
        </div>
        <div className="footerContact" style={{ fontSize: "35px" }}>
          <p>
            {" "}
            <BiSolidPhoneCall /> +1 602 367 895
          </p>
          <p>
            {" "}
            <MdEmail /> tinythinkers@gmail.com
          </p>
          <FaInstagram /> <FaLinkedin /> <FaTiktok /> <FaFacebook />{" "}
          <FaYoutube />
        </div>
      </footer>
      <div className="footerRows">
        <div className="footerRow">
          <p>SHOP</p>
          <p>VIDEOS</p>
          <p>SUMMER CAMP</p>
          <p>EDUCATORS</p>
        </div>
        <div className="footerRow">
          <p>ABOUT US</p>
          <p>FAQS</p>
          <p>ACCOUNT</p>
          <p>CAREERS</p>
        </div>
        <div className="footerRow">
          <p>PRIVACY POLICY</p>
          <p>SHIPPING POLICY</p>
          <p>REFUND POLICY</p>
          <p>SUBSCRIPTION POLICY</p>
        </div>
        <div className="footerRow">
          <p>TERMS & CONDITIONS</p>
          <p>ACCESSIBILITY</p>
          <p>PLATINUM TICKET SWEEPSTAKES</p>
          <p>TINY THINKER CONTEST</p>
        </div>
        <div className="footerRow">
          <p>© 2023 Tiny Thinkers LLC, - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
