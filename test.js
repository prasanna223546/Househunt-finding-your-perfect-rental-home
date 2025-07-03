const express = require('express');
const authenticateUser = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/protected', authenticateUser, (req, res) => {
  res.json({ message: `Welcome ${req.user.name}, this is protected data.` });
});

module.exports = router;
