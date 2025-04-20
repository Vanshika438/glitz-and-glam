import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Submit a contact form
router.post("/submit", async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log("Received contact form data:", req.body); // 🔍 Debug log

  if (!email && !phone) {
    return res.status(400).json({ error: 'Email or phone is required.' });
  }

  try {
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact submitted successfully.' });
  } catch (error) {
    console.error("Error saving contact:", error); // 🔍 Log exact error
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});


// Get all contact messages (for admin use)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving messages", error });
  }
});

export default router;
