import React, { useState } from 'react';
import './About.css'; // Import your CSS file
// import slide from '../assets/images/slide.jpg'; // Import the image

const About = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Simulate login success
      alert('Login Successful');
    } else {
      setErrors(formErrors);
    }
  };



  return (

<>  

<div class="about-section">
  <h1 style={{position:'relative', marginTop:'50px'}}>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>
    <div>
    <h3 style={{position:'relative', textAlign:'center',marginTop:'20px'}}>Feel free to adjust the content to better fit your website's style and tone.</h3>
    <p style={{position:'relative', textAlign:'center'}}>Genuine Profiles | Safe & Secure | Detailed Family Information</p>
    <div style={{display:'flex', justifyContent:'space-around', position:'relative', marginTop:'20px'}}>
      <div>Box1</div>
      <div>Box2</div>
    </div>
    </div>
  
      <div className="content-wrapper" style={{position:'relative', marginTop:'60px', marginLeft:'155px'}} >
     
        <div className="content-section"  >
          <h3>Our Mission</h3>
          <p>
            We believe in the power of love and are dedicated to providing a
            safe and secure platform for compatible individuals to find each
            other. We empower users with advanced search filters and personalized
            matching algorithms to create meaningful connections.
          </p>
          <h3>Our Values</h3>
          <ul className="values">
            <li>
              <i className="fas fa-heart"></i> Trust & Security
            </li>
            <li>
              <i className="fas fa-search"></i> Compatibility Matching
            </li>
            <li>
              <i className="fas fa-users"></i> Diverse Community
            </li>
            <li>
              <i className="fas fa-heart-pulse"></i> Dedicated Support
            </li>
          </ul>
          <h3>Success Stories</h3>
          <div className="testimonials">
            <blockquote>
              <p>
                {/* "Thanks to [Your Website Name], I found the love of my life! We
                couldn't be happier." - [Couple's Names] */}
              </p>
            </blockquote>
            <blockquote>
              <p>
                {/* "This platform is user-friendly and helped me connect with someone
                who shares my values." - [Another Couple's Names] */}
              </p>
            </blockquote>
          </div>
        </div>
        <div className="form-section">
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Id*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className={errors.email ? 'is-invalid' : ''}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}

            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className={errors.password ? 'is-invalid' : ''}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}

            <button type="submit">Continue</button>
          </form>
          <div className="text-center">
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <div className="text-center mt-3">
            <small>
              By Signing Up You Agree To Our <a href="#">Terms And Conditions</a> And <a href="#">Privacy Policy</a>.
            </small>
          </div>
        </div>
      </div>
    
      </>
  );
};

export default About;




