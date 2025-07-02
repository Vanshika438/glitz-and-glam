import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/GG.png";
import Aboutme from "../assets/Aboutme.png";
import "../styles/Home.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <img src={logo} alt="Glitz & Glam" className="logo" />
        <h1>Unleash Your Inner Glam</h1>
        <p>Professional makeup services for every occasion</p>
        <Link to="/booking" className="cta-btn">Book an Appointment</Link>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="text">
          <h2>About Me</h2>
          <p> Passionate makeup artist and hairstylist with a year of experience and 200+ happy clients. I specialize in tailored, flawless looks—be it bridal, party, or subtle transformations—making you feel confident and radiant for any special moment. Let's create magic together!
</p>
        </div>
        <div className="image">
          <img src={Aboutme} alt="About" />
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2>Our Services</h2>
        <div className="service-cards-preview">
          <div className="card-preview">
            <img src={require("../assets/services/Bridal.jpeg")} alt="Bridal Look" />
            <div className="overlay">Bridal Look</div>
          </div>
          <div className="card-preview">
            <img src={require("../assets/services/Mehndi.jpeg")} alt="Mehndi Look" />
            <div className="overlay">Mehndi Look</div>
          </div>
          <div className="card-preview">
            <img src={require("../assets/services/Reception.jpeg")} alt="Reception Look" />
            <div className="overlay">Reception Look</div>
          </div>
          <div className="card-preview">
            <img src={require("../assets/services/Party.jpeg")} alt="Party Look" />
            <div className="overlay">Party Look</div>
          </div>
        </div>
        <Link to="/services" className="see-more-btn">See More Services</Link>
      </section>

      {/* Testimonials Preview */}
      <section className="testimonials-preview">
        <h2>What Clients Say</h2>
        <div className="testimonial-cards">
          <blockquote>“Thank you❤ Archi, for your incredible support and amazing makeup skills. You are not just a great makeup artist but also a very supportive person in every situation. You made all my days so special and gave me so much confidence. I'm truly grateful for everything! 🙏”</blockquote>
          <blockquote>“I just wanted to thank you so much for the amazing hair and make up you did for me.💕🥰 Thank you so much for beautiful makeup❤😍”</blockquote>
          <blockquote>“Bhot sundar makeup tha di – jaisa mujhe chahiye tha, usse bhi bhot achha tha🤗 Mujhe aur sabko bhot pasand aaya ❣❣ Thank you so much di ❤✨”</blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <h2>Ready to Glow?</h2>
        <Link to="/booking" className="cta-btn">Book Your Glam Session</Link>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Glitz & Glam. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
