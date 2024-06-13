import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    image: 'https://via.placeholder.com/80',
    name: 'John Doe',
    quote: 'Thanks to this matrimony website, I found my perfect match. The services are exceptional, and the support team is always there to help!',
    location: 'New York, USA'
  },
  {
    image: 'https://via.placeholder.com/80',
    name: 'Jane Smith',
    quote: 'I am grateful for the personalized support and privacy protection this site offers. It made my journey to finding love smooth and secure.',
    location: 'London, UK'
  },
  {
    image: 'https://via.placeholder.com/80',
    name: 'Rajesh Kumar',
    quote: 'The profile matching and verification process is top-notch. I highly recommend this site to anyone looking for a serious relationship.',
    location: 'Mumbai, India'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>What Our Users Say</h1>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-image" />
            <div className="testimonial-name">{testimonial.name}</div>
            <div className="testimonial-quote">"{testimonial.quote}"</div>
            <div className="testimonial-location">{testimonial.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
