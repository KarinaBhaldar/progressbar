// PreviewPage.js

import React, { useEffect, useState } from 'react';

const PreviewPage = () => {
  // State to store submitted data
  const [formData, setFormData] = useState({});

  // Function to fetch submitted data from local storage
  useEffect(() => {
    const storedData = localStorage.getItem('submittedData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h2>Preview Page</h2>
      {/* Render submitted data */}
      <div>
        <h3>Preview of Submitted Data:</h3>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        {/* Render other submitted data fields */}
      </div>
      {/* Add button or link to navigate back to the previous page */}
    </div>
  );
};

export default PreviewPage;