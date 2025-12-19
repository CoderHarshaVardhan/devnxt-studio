const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }

    const newUser = new User({
      name,
      email,
      phone
    });

    await newUser.save();

    res.status(201).json({ 
      success: true,
      message: 'Contact information saved successfully' 
    });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error, please try again later' 
    });
  }
});

module.exports = router;
