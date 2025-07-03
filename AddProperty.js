// src/pages/AddProperty.js
import React, { useState } from "react";
import "../pages/FormStyles.css"; // Make sure this file exists or use App.css

const AddProperty = () => {
  const [property, setProperty] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted property:", property);
    alert("✅ Property submitted successfully!");
  };

  return (
    <div
      style={{
        backgroundImage: `url("/images/login-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <div className="form-container">
        <h2>Add New Property</h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={property.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={property.location}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={property.price}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={property.description}
          onChange={handleChange}
          rows="4"
        ></textarea>
        <button onClick={handleSubmit}>Submit Property</button>
      </div>
    </div>
  );
};

export default AddProperty;






