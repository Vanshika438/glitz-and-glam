import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking successful!", booking: newBooking });
  } catch (error) {
    console.error("Booking failed:", error);
    res.status(500).json({ message: "Booking failed", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving bookings", error });
  }
});

export default router;
