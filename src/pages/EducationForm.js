import React, { useState } from 'react';
import './EducationForm.css';

const EducationForm = () => {
  const [formData, setFormData] = useState({
    highestEducation: '',
    collegeName: '',
    job: '',
    jobType: '',
    annualIncome: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <form className="education-form" onSubmit={handleSubmit}>
      <h2>Education and Job Details</h2>
      <div className="form-group">
        <label>Highest Education</label>
        <input type="text" name="highestEducation" value={formData.highestEducation} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>College Name</label>
        <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Job</label>
        <input type="text" name="job" value={formData.job} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Job Type</label>
        <select name="jobType" value={formData.jobType} onChange={handleChange} required>
          <option value="">Select Job Type</option>
          <option value="private">Private</option>
          <option value="government">Government</option>
          <option value="freelance">Freelance</option>
          <option value="self-employed">Self-Employed</option>
          <option value="academic">Academic/Education</option>
          <option value="healthcare">Healthcare</option>
          <option value="military">Military</option>
          <option value="agriculture">Agriculture</option>
          <option value="technology">Technology</option>
          <option value="arts">Art and Entertainment</option>
          <option value="transportation">Transportation</option>
          <option value="skilled-labor">Trades and Skilled Labor</option>
          <option value="all">Not Working</option>
        </select>
      </div>
      <div className="form-group">
        <label>Annual Income</label>
        <input type="text" name="annualIncome" value={formData.annualIncome} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EducationForm;
