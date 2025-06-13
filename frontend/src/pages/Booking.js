import React, { useState } from "react";
import axios from "axios";
import "../styles/Booking.css";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
  });

  const [useBackend] = useState(false); // Switch to true when backend is ready

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.trim() && !form.phone.trim()) {
      alert("Please provide either your email or phone number.");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (form.phone && !phoneRegex.test(form.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      if (useBackend) {
        const res = await axios.post("http://localhost:5000/api/bookings", form);
        alert(res.data.message || "Booking successful!");
      } else {
        const res = await fetch("https://formspree.io/f/xkgbryyz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          alert("Booking submitted via Formspree!");
        } else {
          alert("Booking failed via Formspree.");
        }
      }
      setForm({ name: "", email: "", phone: "", date: "", service: "" });
    } catch (err) {
      console.error(err);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div className="booking-page">
      <h2 className="booking-title">Book Your Glam Session</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Your Phone Number" value={form.phone} onChange={handleChange} />
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="" disabled>Select a Service</option>
          <option value="Student">Student</option>
          <option value="Bridal Makeup">Bridal Makeup</option>
          <option value="Party Glam">Party Glam</option>
          <option value="Haldi Look">Haldi Look</option>
          <option value="Reception Look">Reception Look</option>
          <option value="Mehndi Look">Mehndi Look</option>
          <option value="Sangeet Look">Sangeet Look</option>
          <option value="Overall Ceremony Package">Overall Ceremony Package</option>
        </select>
        <button type="submit">Book Now</button>
      </form>

      <div className="insta-dm">
        <p>
          💌 For any query, DM me on{" "}
          <a href="https://www.instagram.com/glitzandglam_by_archi" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
};

export default Booking;
