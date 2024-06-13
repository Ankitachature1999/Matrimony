import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import ProfileForm from './ProfileForm'; // Adjust the import path if necessary
import { Link } from 'react-router-dom';

import slide from '../assets/images/slide.jpg';
import './ProfileForm.css';
import cp1 from '../assets/images/cp1.jpg';
import cp2 from '../assets/images/cp2.jpg';
import cp3 from '../assets/images/cp3.jpg';
import cp4 from '../assets/images/cp4.jpeg';
import pic1 from '../assets/images/pic1.avif';
import pic4 from '../assets/images/pic4.jpeg';
import pic2 from '../assets/images/pic2.webp';
import pic5 from '../assets/images/pic5.jpg'
function Home() {
  const [showProfileForm, setShowProfileForm] = useState(false);

  return (
    <Container
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
      {/* Carousel Component */}
      <Carousel className="mb-4" style={{ width: '100%', borderRadius: '0px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic5}
            alt="First slide"
            style={{ height: '550px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic4}
            alt="Third slide"
            style={{ height: '550px', objectFit: 'cover', width: '100%', objectPosition: 'center' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic1}
            alt="Third slide"
            style={{ height: '550px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>

      {/* Steps Section */}
      <div className="text-center mb-5">
        <h2 className="mb-4" style={{ color: 'black', fontWeight: 'bold',marginLeft:'300px' }}>Meet Your Perfect Companion...</h2>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="text-center" style={{ border: 'none' }}>
              <Card.Body>
                <div className="mb-3" style={{ width: '80px', height: '80px', backgroundColor: '#00BFFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <span role="img" aria-label="sign up" style={{ fontSize: '2em', color: '#fff' }}>📝</span>
                </div>
                <Card.Title>   <Link to="/register">Sign up</Link></Card.Title>
                <Card.Text>
                  Register for free & put up your Profile
                </Card.Text>
                <p>Step 1</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-center" style={{ border: 'none' }}>
              <Card.Body>
                 
                <div className="mb-3" style={{ width: '80px', height: '80px', backgroundColor: '#00BFFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <span role="img" aria-label="connect" style={{ fontSize: '2em', color: '#fff' }}>🔗</span>
                </div>
                <Card.Title> <Link to="/educationform">Connect</Link></Card.Title>
                <Card.Text>
                  Select & Connect with Matches you like
                </Card.Text>
                <p>Step 2</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-center" style={{ border: 'none' }}>
              <Card.Body>
                <div className="mb-3" style={{ width: '80px', height: '80px', backgroundColor: '#00BFFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <span role="img" aria-label="interact" style={{ fontSize: '2em', color: '#fff' }}>💬</span>
                </div>
                <Card.Title> <Link to="/careerform"> Interact</Link></Card.Title>
                <Card.Text>
                  Become a Premium Member & Start a Conversation
                </Card.Text>
                <p>Step 3</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {showProfileForm && <ProfileForm onClose={() => setShowProfileForm(false)} />}

      {/* About Section */}
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card className="mb-4" style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'transparent' }}>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <img
                    src={pic4}
                    alt="About Lagnagath"
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                </Col>
                <Col md={8}>
                  <h3>About Lagnagath</h3>
                  <p>
                    Are you ready to embark on a journey of love, companionship, and lifelong commitment? At Matrimony, we believe that every individual deserves to find their perfect match, someone who understands them, supports them, and shares their dreams. Let's start your journey of finding the perfect life partner with our matchmaking experts.
                  </p>
                  <Link to="/about">
                    <Button variant="primary" className="btn-hover" style={{ backgroundColor: 'blue', padding: '10px 20px', width: '150px' }}>
                      View More
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional information section as cards */}
      <Row className="mb-4 justify-content-center" style={{ width: '80%', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Col md={4} xs={12} className="d-flex justify-content-center">
          <Card className="text-center mb-4" style={{ width: '18rem' }}>
            <Card.Body>
              <span role="img" aria-label="members" style={{ fontSize: '2em' }}>👥</span>
              <Card.Title>Lakhs of Genuine Members</Card.Title>
              <Card.Text>
                Search by location, community, profession & more. Get matches on email as per your preferences.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12} className="d-flex justify-content-center">
          <Card className="text-center mb-4" style={{ width: '18rem' }}>
            <Card.Body>
              <span role="img" aria-label="verification" style={{ fontSize: '2em' }}>✔️</span>
              <Card.Title>Verification by Visit</Card.Title>
              <Card.Text>
                Documents on Age, Address, Income etc. collected, Verified stamp added to profile.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12} className="d-flex justify-content-center">
          <Card className="text-center mb-4" style={{ width: '18rem' }}>
            <Card.Body>
              <span role="img" aria-label="privacy" style={{ fontSize: '2em' }}>🔒</span>
              <Card.Title>100% Privacy</Card.Title>
              <Card.Text>
                Control who can see your profile and pictures with advanced privacy settings.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Matched By Matrimony Section */}
      <Row className="mt-5 justify-content-center align-items-center">
        <Col xs={12} className="text-center mb-3">
          <h2 className="headline">Matched By Matrimony</h2>
        </Col>
        
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={cp1} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Couple 1</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={cp2} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Couple 2</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={cp3} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Couple 3</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={cp4} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Couple 4</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Footer Section */}
     
    </Container>
  );
}

export default Home;























