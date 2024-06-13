import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dateOfBirth: '',
    height: '',
    maritalStatus: '',
    motherTongue: '',
    religion: '',
    city: '',
    pincode: '',
    mobileNumber: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Date of Birth</label>
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Height</label>
        <select name="height" value={formData.height} onChange={handleChange} required>
          <option value="">Select Height</option>
          <option value="4'0''">4'0''</option>
          <option value="4'1''">4'1''</option>
          <option value="4'2''">4'2''</option>
          <option value="4'3''">4'3''</option>
          <option value="4'4''">4'4''</option>
          <option value="4'5''">4'5''</option>
          <option value="4'6''">4'6''</option>
          <option value="4'7''">4'7''</option>
          <option value="4'8''">4'8''</option>
          <option value="4'9''">4'9''</option>
          <option value="4'10''">4'10''</option>
          <option value="4'11''">4'11''</option>
          <option value="5'0''">5'0''</option>
          <option value="5'1''">5'1''</option>
          <option value="5'2''">5'2''</option>
          <option value="5'3''">5'3''</option>
          <option value="5'4''">5'4''</option>
          <option value="5'5''">5'5''</option>
          <option value="5'6''">5'6''</option>
          <option value="5'7''">5'7''</option>
          <option value="5'8''">5'8''</option>
          <option value="5'9''">5'9''</option>
          <option value="5'10''">5'10''</option>
          <option value="5'11''">5'11''</option>
          <option value="6'0''">6'0''</option>
          <option value="6'1''">6'1''</option>
          <option value="6'2''">6'2''</option>
          <option value="6'3''">6'3''</option>
          <option value="6'4''">6'4''</option>
          <option value="6'5''">6'5''</option>
          <option value="6'6''">6'6''</option>
          <option value="6'7''">6'7''</option>
          <option value="6'8''">6'8''</option>
          <option value="6'9''">6'9''</option>
          <option value="6'10''">6'10''</option>
          <option value="6'11''">6'11''</option>
          <option value="7'0''">7'0''</option>
        </select>
      </div>
      <div className="form-group">
        <label>Marital Status</label>
        <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
          <option value="">Select Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </div>
      <div className="form-group">
        <label>Mother Tongue</label>
        <input type="text" name="motherTongue" value={formData.motherTongue} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Religion</label>
        <select name="religion" value={formData.religion} onChange={handleChange} required>
          <option value="">Select Religion</option>
          <option value="hindu">Hindu</option>
          <option value="muslim">Muslim</option>
          <option value="christian">Christian</option>
          <option value="sikh">Sikh</option>
          <option value="jain">Jain</option>
          <option value="buddhist">Buddhist</option>
          <option value="parsi">Parsi</option>
          <option value="jewish">Jewish</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>City</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Pincode</label>
        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Mobile Number</label>
        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>
          <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
          I agree to the terms and conditions
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;




