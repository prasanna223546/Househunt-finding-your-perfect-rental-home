const express = require('express');                    // express
const router = express.Router();                       // router
const Booking = require('../models/Booking');          // booking model
const authenticateUser = require('../middleware/authMiddleware'); // JWT middleware

// ====== CREATE A BOOKING ======
router.post('/create', authenticateUser, async (req, res) => {
  try {
    const { property, fromDate, toDate } = req.body;   // extract input

    const newBooking = new Booking({                   // create new booking
      property,
      renter: req.user.id,
      fromDate,
      toDate
    });

    await newBooking.save();                           // save booking

    res.status(201).json({ message: 'Booking successful', booking: newBooking });
  } catch (err) {
    res.status(500).json({ error: err.message });      // error handling
  }
});
// ====== GET MY BOOKINGS ======
router.get('/my-bookings', authenticateUser, async (req, res) => {
  try {
    const bookings = await Booking.find({ renter: req.user.id })     // find bookings
      .populate('property', 'title price address')                   // include property info
      .sort({ createdAt: -1 });                                      // sort recent first

    res.json(bookings);                                              // send result
  } catch (err) {
    res.status(500).json({ error: err.message });                    // error handling
  }
});

module.exports = router;                                             // export
// ====== CANCEL A BOOKING ======
router.put('/cancel/:id', authenticateUser, async (req, res) => {
  try {
    const bookingId = req.params.id;

    // Only allow if the booking belongs to the logged-in user
    const booking = await Booking.findOne({ _id: bookingId, renter: req.user.id });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found or unauthorized' });
    }

    booking.status = 'cancelled';       // update status
    await booking.save();               // save updated booking

    res.json({ message: 'Booking cancelled successfully', booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
