"use client";
import React, { useState } from "react";

export default function PriceProductType() {
  const [selectedBox, setSelectedBox] = useState("");
  const [price, setPrice] = useState(null);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedBox(selectedValue);

    switch (selectedValue) {
      case "Box 1":
        setPrice(29.99);
        break;
      case "Box 2":
        setPrice(124.95);
        break;
      case "Box 3":
        setPrice(199.9);
        break;
      default:
        setPrice(null);
        break;
    }
  };

  const handleSubmit = () => {
    alert(`Price: $${price}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="sub-title">Box Types</h2>
      <select
        className="form-select mb-3"
        onChange={handleSelectChange}
        value={selectedBox}
      >
        <option value="">Select</option>
        <option value="Box 1">Onetime pass 29.99</option>
        <option value="Box 2">5 time pass 24.99 each</option>
        <option value="Box 3">10 time pass 19.99 each</option>
      </select>

      {price !== null && (
        <div className="p-3 mb-3 border rounded">
          <h3>
            Price: <span className="sub-title">${price}</span>
          </h3>
        </div>
      )}

      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
