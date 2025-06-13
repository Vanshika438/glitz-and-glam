import React from "react";
import "../styles/Services.css";
import Session1 from "../assets/services/Session1.mp4";
import Session2 from "../assets/services/Session2.mp4";
import Session3 from "../assets/services/Session3.mp4";

import group1 from "../assets/services/group1.jpeg";
import group2 from "../assets/services/group2.jpeg";
import Tilt from 'react-parallax-tilt';
// Importing media manually
import sangeetImg from "../assets/services/Sangeet.jpeg";
import mehndiImg from "../assets/services/Mehndi.jpeg";
import haldiImg from "../assets/services/Haldi.jpeg";
import bridalImg from "../assets/services/Bridal.jpeg";
import receptionImg from "../assets/services/Reception.jpeg";
import EngagementImg from "../assets/services/Engagement.jpeg";
import partyImg from "../assets/services/Party.jpeg";

import sangeetVid from "../assets/services/Sangeet.mp4";
import mehndiVid from "../assets/services/Mehndi.mp4";
import haldiVid from "../assets/services/Haldi.mp4";
import bridalVid from "../assets/services/Bridal.mp4";
import receptionVid from "../assets/services/Reception.mp4";
import EngagementVid from "../assets/services/Engagement.mp4";
import partyVid from "../assets/services/Party.mp4";

import Outfit1 from "../assets/services/Outfit1.jpeg";
import Outfit2 from "../assets/services/Outfit2.jpeg";
import Outfit3 from "../assets/services/Outfit3.jpeg";
import Outfit4 from "../assets/services/Outfit4.jpeg";

const services = [
  { title: "Sangeet Look", image: sangeetImg, video: sangeetVid },
  { title: "Mehndi Look", image: mehndiImg, video: mehndiVid },
  { title: "Enagement Look", image: EngagementImg, video: EngagementVid },
  { title: "Haldi Look", image: haldiImg, video: haldiVid },
  { title: "Bridal Look", image: bridalImg, video: bridalVid },
  { title: "Reception Look", image: receptionImg, video: receptionVid },
  { title: "Party Look", image: partyImg, video: partyVid },
];

const Services = () => {
  return (
    <div className="services">
      <h2 className="section-title">Our Signature Looks</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card fade-hover">
            <img
              className="service-img"
              src={service.image}
              alt={service.title}
            />
            <video
              className="service-video"
              src={service.video}
              autoPlay
              muted
              loop
              playsInline
            />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>

      <div className="outfit-section">
        <h3 className="section-title">👗 Outfit Rentals</h3>
        <p>Step into glam with Archi’s exclusive outfit rentals!</p>

        <div className="outfit-tilt-gallery">
          {[Outfit1, Outfit2, Outfit3, Outfit4].map((img, idx) => (
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              transitionSpeed={250}
              key={idx}
              className="tilt-card"
            >
              <img src={`${img}`} alt={`Outfit ${idx + 1}`} />
            </Tilt>
          ))}
        </div>

        <div className="outfit-buttons">
          <a href="/booking" className="btn-rent">Book now</a>
          <a
            href="https://www.instagram.com/glitzandglam_by_archi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram"
          >
            See More on Instagram
          </a>
        </div>
      </div>

      <div className="teaching-section">
        {/* Section Title */}
        <h3 className="section-title">💄 Makeup Training by Archi</h3>
        <p>Real sessions. Real transformations. Certified by Archi herself.</p>

        {/* Two Group Photos */}
        <div className="group-photo-grid">
          <img src={group1} alt="Group Certification 1" />
          <img src={group2} alt="Group Certification 2" />
        </div>

        {/* Session Video Gallery */}
        <div className="session-video-gallery">
          {[
            { video: Session1, title: "Bridal Masterclass" },
            { video: Session2, title: "Haldi Look Demo" },
            { video: Session3, title: "Mehndi Session" }
          ].map((item, idx) => (
            <div className="session-card" key={idx}>
              <video src={item.video} autoPlay muted loop playsInline />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="/booking" className="btn-learn">
          Join a Class
        </a>
      </div>


    </div>
  );
};

export default Services;
