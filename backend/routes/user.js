const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Load environment variables
require('dotenv').config();

// @route   POST /api/user/register
// @desc    Create a user
// @access  Public
router.post('/register', async (req, res) => {
  const { email, fullName, password, role } = req.body;

  try {
    // Check if the user with the given email already exists
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      return res.status(400).json({ error: "User already registered!" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await argon2.hash(password);

    // Create a new user
    const newUser = await User.create({
      username: fullName,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(201).json(newUser); // Use 201 status for successful creation
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// @desc    Login user
// @route   POST /api/user/login
// @access  Public
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res.status(404).json({ error: "No record found" });
    }

    // Check if the provided password matches the stored hashed password
    const isMatch = await argon2.verify(foundUser.password, password);

    if (!isMatch) {
      return res.status(401).json({ error: "Password is incorrect" });
    }

    console.log('ACCESS_TOKEN_SECRET:', process.env.ACCESS_TOKEN_SECRET);
    console.log('User ID:', foundUser._id);
    console.log('Expires In:', '1m');

    const token = jwt.sign(
      { userId: foundUser._id, role: foundUser.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );

    return res.json({ token, userId: foundUser._id, role: foundUser.role });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
