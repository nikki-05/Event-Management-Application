const express = require("express");
const Event = require("../models/Event");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Create a new event
router.post("/", async (req, res) => {
  const { name, description, date } = req.body;

  if (!name || !description || !date) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newEvent = new Event({ name, description, date });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Attend an Event
router.post("/:id/attend", authMiddleware, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });

    if (!event.attendees.includes(req.user.id)) {
      event.attendees.push(req.user.id);
      await event.save();
    }
    
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
