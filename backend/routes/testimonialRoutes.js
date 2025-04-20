import express from "express";
import Testimonial from "../models/Testimonial.js";

const router = express.Router();

// Create a new testimonial
router.post("/", async (req, res) => {
  try {
    const newTestimonial = new Testimonial(req.body);
    await newTestimonial.save();
    res.status(201).json({ message: "Testimonial added!", testimonial: newTestimonial });
  } catch (error) {
    res.status(500).json({ message: "Error adding testimonial", error });
  }
});

// Get all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving testimonials", error });
  }
});

export default router;
