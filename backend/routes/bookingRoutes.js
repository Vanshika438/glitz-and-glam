import express from "express";
import Booking from "../models/Booking.js";
import fs from "fs";
import path from "path";
import XLSX from "xlsx";
import { fileURLToPath } from "url";

const router = express.Router();

// For resolving __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exportFilePath = path.join(__dirname, "../exports/bookings.xlsx");

// Create a new booking and append to Excel
router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();

    // Excel logic
    let workbook;
    let worksheetData = [];

    // If file exists, read and load existing data
    if (fs.existsSync(exportFilePath)) {
      workbook = XLSX.readFile(exportFilePath);
      const sheet = workbook.Sheets["Bookings"];
      worksheetData = XLSX.utils.sheet_to_json(sheet);
    } else {
      workbook = XLSX.utils.book_new();
    }

    // Append the new booking
    worksheetData.push({
      Name: req.body.name,
      Email: req.body.email,
      Phone: req.body.phone,
      Date: req.body.date,
      Message: req.body.message,
      SubmittedAt: new Date().toISOString(),
    });

    const newSheet = XLSX.utils.json_to_sheet(worksheetData);
    const newWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWorkbook, newSheet, "Bookings");

    XLSX.writeFile(newWorkbook, exportFilePath);

    res.status(201).json({ message: "Booking successful!", booking: newBooking });
  } catch (error) {
    console.error("Booking failed:", error);
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

router.get("/export", async (req, res) => {
  try {
    const bookings = await Booking.find().lean(); // Get plain JS objects

    const worksheet = XLSX.utils.json_to_sheet(bookings);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");

    const filePath = "Bookings.xlsx";
    XLSX.writeFile(workbook, filePath);

    res.download(filePath, "Bookings.xlsx", (err) => {
      if (err) console.error("Download error:", err);
      fs.unlinkSync(filePath); // Delete the file after sending
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to export bookings", error });
  }
});
export default router;
