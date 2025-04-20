import React from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Aarohi Mehta",
    quote: "Absolutely stunning work! I felt like a queen on my big day.",
  },
  {
    name: "Simran Kaur",
    quote: "The glam was flawless. Everyone complimented my look!",
  },
  {
    name: "Natasha Patel",
    quote: "She's professional, punctual, and so talented. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <h2 className="testimonials-title">What Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p className="quote">“{t.quote}”</p>
            <p className="client-name">– {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
