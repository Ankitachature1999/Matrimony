import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './LoginForm.css'; // Create and import your custom CSS here

const LoginForm = ({ show, handleClose }) => {
  const [profile, setProfile] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { profile, name, phone });
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create a Matrimony Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formProfile">
            <Form.Label>Select Profile</Form.Label>
            <Form.Control
              as="select"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              required
            >
              <option value="">Select Profile</option>
              {/* Add options here */}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <div className="d-flex">
              <Form.Control
                type="text"
                value="+91"
                readOnly
                className="country-code"
              />
              <Form.Control
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-block">
            Register Free
          </Button>
          <Form.Text className="text-muted">
            By clicking register free, I agree to the T&C and Privacy Policy
          </Form.Text>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;
