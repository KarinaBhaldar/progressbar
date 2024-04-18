import React from 'react';

function SummaryPage() {
  const allFormData = JSON.parse(localStorage.getItem('allFormData'));

  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <div>
        <p>Username: {allFormData.username}</p>
        <p>Email: {allFormData.email}</p>
        <p>Password: {allFormData.password}</p>
        <p>First Name: {allFormData.firstName}</p>
        <p>Last Name: {allFormData.lastName}</p>
        <p>Age: {allFormData.age}</p>
        <p>Gender: {allFormData.gender}</p>
        <p>School/University: {allFormData.school}</p>
        <p>Degree: {allFormData.degree}</p>
        <p>Field of Study: {allFormData.fieldOfStudy}</p>
        <p>Graduation Year: {allFormData.graduationYear}</p>
      </div>
    </div>
  );
}

export default SummaryPage;