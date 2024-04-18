import React, { useState } from 'react';

function PersonalDetailsForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    profileImage: null // New state to store the selected profile image file
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({ ...formData, profileImage: imageFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with formData including the profile image
  };

  return (
    <div className="form-container">
      <h2>Personal Details Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} />
        <input type="number" name="age" placeholder="Age" onChange={handleInputChange} />
        <select name="gender" onChange={handleInputChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {/* Input field for profile image */}
        <input type="file" name="profileImage" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PersonalDetailsForm;