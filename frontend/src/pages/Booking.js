// Booking.js
import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Booking.css";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: null,
    service: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [useBackend] = useState(false); // switch to true when backend is ready

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.trim() && !form.phone.trim()) {
      setError("Please provide either your email or phone number.");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (form.phone && !phoneRegex.test(form.phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email && !emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!form.date) {
      setError("Please select a valid date.");
      return;
    }

    setSubmitting(true);
    setMessage("");
    setError("");

    const payload = {
      ...form,
      date: form.date.toISOString().split("T")[0],
    };

    try {
      if (useBackend) {
        const res = await axios.post("http://localhost:5000/api/bookings", payload);
        setMessage(res.data.message || "Booking successful!");
      } else {
        const res = await fetch("https://formspree.io/f/xkgbryyz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          setMessage("Booking submitted!");
        } else {
          setError("Booking failed!");
        }
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        date: null,
        service: "",
      });
    } catch (err) {
      console.error(err);
      setError("Booking failed. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <div className="booking-page">
      <h2 className="booking-title">Book Your Glam Session</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          autoFocus
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <DatePicker
          selected={form.date}
          onChange={(date) => setForm({ ...form, date })}
          minDate={new Date(new Date().setHours(0, 0, 0, 0))}
          placeholderText="Select Booking Date"
          className="custom-datepicker"
          dateFormat="dd-MM-yyyy"
          required
        />


        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="" disabled>Select a Service</option>
          <option value="Bridal Makeup">Bridal Makeup</option>
          <option value="Party Glam">Party Glam</option>
          <option value="Haldi Look">Haldi Look</option>
          <option value="Reception Look">Reception Look</option>
          <option value="Mehndi Look">Mehndi Look</option>
          <option value="Sangeet Look">Sangeet Look</option>
          <option value="Overall Ceremony Package">Overall Ceremony Package</option>
          <option value="Student">Student</option>
        </select>

        <button type="submit" disabled={submitting}>
          {submitting ? "Booking..." : "Book Now"}
        </button>

        {message && <p className="booking-success">{message}</p>}
        {error && <p className="booking-error">{error}</p>}
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
