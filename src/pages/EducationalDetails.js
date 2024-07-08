import React from 'react';

const EducationalDetails = ({ formData, handleChange }) => {
  return (
    <div className="form-step">
      <h2>Educational Details</h2>
      <div>
        <label>Highest Qualification:</label>
        <input
          type="text"
          name="highestQualification"
          value={formData.highestQualification}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>College Name:</label>
        <input
          type="text"
          name="collegeName"
          value={formData.collegeName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Job:</label>
        <input
          type="text"
          name="job"
          value={formData.job}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Job Type:</label>
        <input
          type="text"
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Annual Income:</label>
        <input
          type="text"
          name="annualIncome"
          value={formData.annualIncome}
          onChange={handleChange}
        />
      </div>
      {/* Add more educational details fields as needed */}
    </div>
  );
};

export default EducationalDetails;
