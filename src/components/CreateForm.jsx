import React, { useState } from "react";


const Createform = () => {
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", userName);
    console.log("Address:", address);
    const formData = {
      name: userName,
      address: address,
    };
    console.log("Form Data Object:", formData);
    setShowResult(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="col-4"></div>
        <div className="mb-3"></div>
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleNameChange}
          value={userName}
          placeholder="Enter your name"
          required
        ></input>
        <div className="mb-3"></div>
        <label className="form-label">Address</label>
        <textarea
          className="form-control"
          rows="3"
          onChange={handleAddressChange}
          value={address}
          placeholder="Enter your address"
          required
        ></textarea>
        <div className="mb-3"></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {showResult && (
        <div className="mt-3">
          <h5>Form Data:</h5>
          <p>Name: {userName}</p>
          <p>Address: {address}</p>
        </div>
      )}
      
    </div>
  );
};

export default Createform;
