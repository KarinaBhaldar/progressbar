// EducationalDetailsForm.js

import React, { useState } from 'react';

const EducationalDetailsForm = () => {
  const [formData, setFormData] = useState({
    degree: '',
    institution: '',
    // Add more fields as needed
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission
    // Navigate to the next page (e.g., PreviewPage)
    history.push('/preview');
  };

  return (
    <div>
      <h2>Educational Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="degree">Degree:</label>
          <input type="text" id="degree" name="degree" value={formData.degree} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="institution">Institution:</label>
          <input type="text" id="institution" name="institution" value={formData.institution} onChange={handleChange} />
        </div>
        {/* Add more fields for educational details */}
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default EducationalDetailsForm;