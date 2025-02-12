const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// ✅ Register a New User
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword, isGuest: false });

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Login a User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email, isGuest: user.isGuest } });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Guest Login (Temporary Account)
router.post("/guest", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash("guest", 10); // Hash guest password

    const guestUser = await User.create({
      name: "Guest User",
      email: `guest${Date.now()}@test.com`,
      password: hashedPassword,
      isGuest: true,
    });

    const token = jwt.sign({ id: guestUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, guest: true, user: { id: guestUser._id, name: guestUser.name, email: guestUser.email } });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Register a Sample User (Restricted Access)
router.post("/register-sample", async (req, res) => {
  try {
    if (process.env.NODE_ENV !== "development" && req.headers["admin-key"] !== process.env.ADMIN_KEY) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const existingUser = await User.findOne({ email: "sampleuser@example.com" });

    if (existingUser) {
      return res.status(400).json({ message: "Sample user already exists." });
    }

    const hashedPassword = await bcrypt.hash("Sample@123", 10);
    const newUser = await User.create({
      name: "Sample User",
      email: "sampleuser@example.com",
      password: hashedPassword,
      isGuest: false,
    });

    res.status(201).json({ message: "Sample user created successfully." });
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
