const express = require("express");
const Event = require("../models/Event");
const jwt = require("jsonwebtoken"); // Import JWT
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Create a New Event (Allow Guests to Create One)
router.post("/", async (req, res) => {
  try {
    const { name, description, date } = req.body;

    if (!name || !description || !date) {
      return res.status(400).json({ error: "All fields are required" });
    }

    let userId = null;

    // Check if user is logged in
    if (req.headers.authorization) {
      try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.id; // Logged-in user ID
      } catch (error) {
        return res.status(403).json({ error: "Invalid token" });
      }
    }

    // If guest (no userId), check if they already created one event
    if (!userId) {
      const guestIdentifier = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      const existingEvent = await Event.findOne({ createdBy: guestIdentifier });

      if (existingEvent) {
        return res.status(403).json({ error: "Guests can only create one event" });
      }
    }

    // Create event (for logged-in users, store userId; for guests, store unique IP)
    const newEvent = new Event({
      name,
      description,
      date,
      createdBy: userId || (req.headers["x-forwarded-for"] || req.connection.remoteAddress),
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    console.error("Error creating event:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
