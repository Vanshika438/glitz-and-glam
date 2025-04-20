import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// Create a new booking
router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking successful!", booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: "Booking failed", error });
  }
});

// Get all bookings (for admin use)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving bookings", error });
  }
});

export default router;
