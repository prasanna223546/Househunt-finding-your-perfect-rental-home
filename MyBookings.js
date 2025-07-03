// src/pages/MyBookings.js
import React, { useEffect, useState } from "react";
import "../pages/FormStyles.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Dummy data — replace with API call
    setBookings([
      { id: 1, property: "Goa Villa", date: "15th July 2025" },
    ]);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("/images/login-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="form-container">
        <h2>📅 My Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} style={{ marginBottom: "20px" }}>
              <strong>{booking.property}</strong>
              <p>Booked for: {booking.date}</p>
              <button>Cancel</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookings;







