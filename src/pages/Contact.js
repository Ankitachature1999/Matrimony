import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Contact.css'; // Import your CSS file if needed (optional)
import couple from '../assets/images/couple.jpg'; // Import the image
import slide from '../assets/images/slide.jpg';

function Contact() {
  return (
    <div
    fluid
    style={{
      backgroundImage: `url(${slide})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
    
    
    >
    <Container
      className="container mt-5"
      style={{
        backgroundImage: `url(${couple})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the container fills the viewport height
      }}
    >
      <h1>Contact Us</h1>
      <Form>
        <Form.Group as={Row} controlId="formName" className="mb-3">
          <Form.Label column sm={2} className="form-label">
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Enter your name" className="form-control" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formEmail" className="mb-3">
          <Form.Label column sm={2} className="form-label">
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Enter your email" className="form-control" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPassword" className="mb-3">
          <Form.Label column sm={2} className="form-label">
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Enter your password" className="form-control" />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-primary">
          Submit
        </Button>
      </Form>
    </Container>
    </div>
  );
}

export default Contact;




