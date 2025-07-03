const mongoose = require('mongoose');                  // import mongoose

const bookingSchema = new mongoose.Schema({            // start schema
  property: {
    type: mongoose.Schema.Types.ObjectId,              // reference to property
    ref: 'Property',
    required: true
  },
  renter: {
    type: mongoose.Schema.Types.ObjectId,              // reference to user
    ref: 'User',
    required: true
  },
  fromDate: {
    type: Date,                                         // start date
    required: true
  },
  toDate: {
    type: Date,                                         // end date
    required: true
  },
  status: {
    type: String,
    enum: ['confirmed', 'cancelled'],                  // status options
    default: 'confirmed'
  }
}, { timestamps: true });                              // auto timestamps

module.exports = mongoose.model('Booking', bookingSchema); // export

