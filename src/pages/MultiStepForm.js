import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails ';
import EducationalDetails from './EducationalDetails';
import FamilyDetails from './FamilyDetails';
import './MultiStepForm.css';

const MultiStepForm = ({ handleClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
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
    pinCode: '',
    // Add more fields for educational details
    highestQualification: '',
    collegeName: '',
    job: '',
    jobType: '',
    annualIncome: '',
    // Add more fields for family details
    fatherName: '',
    motherName: '',
    liveWithFamily: '',
    familyType: '',
    diet: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log(formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalDetails formData={formData} handleChange={handleChange} />;
      case 2:
        return <EducationalDetails formData={formData} handleChange={handleChange} />;
      case 3:
        return <FamilyDetails formData={formData} handleChange={handleChange} />;
      default:
        return <PersonalDetails formData={formData} handleChange={handleChange} />;
    }
  };

  return (
    <div className="multi-step-form">
      <button className="close-btn" onClick={handleClose}>X</button>
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="form-navigation">
          {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
          {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
          {step === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
