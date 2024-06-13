import React from 'react';
import './About.css'; // Import your CSS file
import slide from '../assets/images/slide.jpg'; // Import the image

const About = () => {
  return (
    <div className="about-us" style={{ backgroundImage: `url(${slide})` }}>
      <div className="content-wrapper">
        <div className="content-section">
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
                "Thanks to [Your Website Name], I found the love of my life! We
                couldn't be happier." - [Couple's Names]
              </p>
            </blockquote>
            <blockquote>
              <p>
                "This platform is user-friendly and helped me connect with someone
                who shares my values." - [Another Couple's Names]
              </p>
            </blockquote>
          </div>
        </div>
        <div className="form-section">
          <h3>Create Matrimony Profile</h3>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />
            <label htmlFor="mobile">Mobile No.</label>
            <input type="tel" id="mobile" name="mobile" placeholder="Mobile No." />
            <label htmlFor="lookingFor">Select list (select one):</label>
            <select id="lookingFor" name="lookingFor">
              <option value="">Looking For</option>
              <option value="bride">Bride</option>
              <option value="groom">Groom</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;




