import React, { useState } from "react";
import "../styles/Contact.css";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [useBackend] = useState(false); // Toggle to true when backend is ready

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!form.email.trim() && !form.phone.trim()) {
      alert("Please provide either your email or phone number.");
      return;
    }

    if (form.phone.trim() && !phoneRegex.test(form.phone)) {
      alert("Please enter a valid Indian phone number.");
      return;
    }

    try {
      if (useBackend) {
        const res = await axios.post("http://localhost:5000/api/contacts/submit", form);
        alert(res.data.message);
      } else {
        const res = await fetch("https://formspree.io/f/xpwrdbbr", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          alert("Message sent successfully via Formspree!");
        } else {
          alert("Formspree submission failed.");
        }
      }
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-info">
        <p><strong>📞 Phone:</strong> +91 9131489879</p>
        <div className="socials">
          <a href="https://www.instagram.com/glitzandglam_by_archi" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Your Phone Number" value={form.phone} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
