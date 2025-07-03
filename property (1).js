const express = require('express');
const router = express.Router();
const multer = require('multer');
const Property = require('../models/Property');
const authenticateUser = require('../middleware/authMiddleware');

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Add a property
router.post('/add', authenticateUser, upload.single('image'), async (req, res) => {
  try {
    const { title, description, address, price } = req.body;
    const newProperty = new Property({
      title,
      description,
      address,
      price,
      image: req.file.filename,
      owner: req.user.id
    });
    await newProperty.save();
    res.status(201).json({ message: 'Property added successfully', property: newProperty });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find().populate('owner', 'name email');
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
