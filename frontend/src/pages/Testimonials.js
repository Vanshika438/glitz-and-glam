import React, { useState } from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Charmi Jain ✨",
    quote: `Firstly, a big big thank you for making me feel like the most beautiful version of myself on all my wedding functions! 💫

Each and every makeup look was honestly so on point – from the subtle glam to the full bridal look, everything was exactly how I had imagined (maybe even better 😍). You really understood my vibe and made sure I was comfortable throughout.

Everyone kept complimenting the looks – especially my bridal day look! I got so many “wow you look stunning” and “who’s your makeup artist?” comments 😄

More than just the makeup, I really appreciated your calm and positive energy. It helped me stay relaxed during the chaos. You were punctual, professional, yet so friendly – it felt like having a friend around.

Thank you for being such an important part of my big day. I’m honestly so happy I chose you! Would 1000% recommend you to every bride-to-be! 💖

Lots of love & gratitude,
Charmi Jain ✨`
  },
  {
    name: "Khushbu Patidar, Mumbai",
    quote: `Thank you❤ Archi, for your incredible support and amazing makeup skills. You are not just a great makeup artist but also a very supportive person in every situation. You made all my days so special and gave me so much confidence. I'm truly grateful for everything! 🙏`,
  },
  {
    name: "Aanchal Porwal",
    quote: `I just wanted to thank you so much for the amazing hair and make up you did for me.💕🥰 Thank you so much for beautiful makeup❤😍`,
  },
  {
    name: "Vidhi Chouhan, Pratapgarh",
    quote: `Boht pyare lage sare ke sare makeup, thank you so much Archi ji! Jaisa mene socha tha, vesa hi mera makeup hua he. Or sabse jyada acha to mujhe apka nature laga – jitna softly aap baat karte ho, samjhate ho – samne wale ki tension to wahin kam ho jati hai.`,
  },
  {
    name: "Shikha Sharma, Mandsaur",
    quote: `Hi Archi, you did an absolutely amazing job! From the consultation to the final look, you truly listened to what I wanted and executed it perfectly. Your attention to detail, professionalism, and skill were top-notch. My makeup lasted all day and looked flawless in every photo. I felt confident and beautiful, and I can't recommend you enough!`,
  },
  {
    name: "Anjali Dhanotiya, Sitamau",
    quote: `Bhot sundar makeup tha di – jaisa mujhe chahiye tha, usse bhi bhot achha tha🤗 Mujhe aur sabko bhot pasand aaya ❣❣ Thank you so much di ❤✨`,
  },
];

const Testimonials = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="testimonials-page">
      <h2 className="testimonials-title">What Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`testimonial-card ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleCard(index)}
          >
            <p className="quote">
              {openIndex === index ? t.quote : `${t.quote.substring(0, 100)}...`}
            </p>
            <p className="client-name">– {t.name}</p>
            <span className="read-more">
              {openIndex === index ? "Show less ▲" : "Read more ▼"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
