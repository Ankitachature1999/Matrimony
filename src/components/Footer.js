import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'; // Import your CSS file

function Footer() {
  return (
    <MDBFooter className='footer text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      {/*  <div className=' me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
  </div>*/} 
         <div className='d-flex align-items-center'>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon='facebook-f' size='2x' color='white'  />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon='twitter' size='2x' color='white' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon='google' size='2x'color='white' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon='instagram' size='2x' color='white'/>
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon='linkedin' size='2x'color='white' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon='github' size='2x' color='white' />
          </a>
        </div>
      </section>

      <section className='mt-5'>
        <MDBContainer className='text-center text-md-start' fluid>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon='gem' className='me-3' />
                Matrimony Website
              </h6>
              <p>Connecting people with the perfect match. Join us to find your soulmate.</p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <ul className='list-unstyled'>
                <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
                <li><a href='#!' className='text-reset'>Profile Creation</a></li>
                <li><a href='#!' className='text-reset'>Matchmaking</a></li>
                <li><a href='#!' className='text-reset'>Success Stories</a></li>
                <li><a href='#!' className='text-reset'>Support</a></li>
              </ul>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <ul className='list-unstyled'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <li><a href='#!' className='text-reset'>Pricing</a></li>
                <li><a href='#!' className='text-reset'>Settings</a></li>
                <li><a href='#!' className='text-reset'>Orders</a></li>
                <li><a href='#!' className='text-reset'>Help</a></li>
              </ul>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <ul className='list-unstyled'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <li><MDBIcon icon='home' className='me-2' /> New York, NY 10012, US</li>
                <li><MDBIcon icon='envelope' className='me-3' /> info@example.com</li>
                <li><MDBIcon icon='phone' className='me-3' /> + 01 234 567 88</li>
                <li><MDBIcon icon='print' className='me-3' /> + 01 234 567 89</li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 copyright'>
        © 2024 Copyright :  
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'> MatrimonyWebsite.com</a>
      </div>
    </MDBFooter>
  );
}

export default Footer;





 




