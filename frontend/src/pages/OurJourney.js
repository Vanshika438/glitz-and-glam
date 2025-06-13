import React from "react";
import "../styles/OurJourney.css";
import { FaInstagram } from "react-icons/fa";

import videoFile from "../assets/services/All.mp4";
import Side1 from "../assets/services/Side1.mp4";
import Side2 from "../assets/services/Side2.mp4";

import Extra1 from "../assets/services/Extra1.mp4";
import Extra2 from "../assets/services/Extra2.mp4";
import Extra3 from "../assets/services/Extra3.mp4";

const OurJourney = () => {
  const extraVideos = [Extra1, Extra2, Extra3]; 

  return (
    <div className="our-journey-page">
      <div className="journey-hero">
        <h1>Our 1 Year Glam Journey ✨</h1>
        <p>Celebrating milestones, memories, and makeup magic!</p>
      </div>

      {/* Top 3 Highlight Videos */}
      <div className="video-wrapper">
        <div className="video-box">
          <video src={Side1} autoPlay muted loop playsInline />
        </div>

        <div className="video-box">
          <video src={videoFile} autoPlay muted loop playsInline />
          <div className="video-overlay">
            <h2>Have a look at our journey</h2>
            <a
              href="https://www.instagram.com/reel/DGdIcrhSQlO/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="journey-button"
            >
              <FaInstagram className="insta-icon" />
              Watch on Instagram
            </a>
          </div>
        </div>

        <div className="video-box">
          <video src={Side2} autoPlay muted loop playsInline />
        </div>
        <div className="more-videos-grid">
        {extraVideos.map((video, index) => (
          <div className="video-box" key={index}>
            <video src={video} autoPlay muted loop playsInline />
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default OurJourney;
