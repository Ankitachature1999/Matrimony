import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import RegistrationForm from './pages/RegistrationForm';
import EducationForm from './pages/EducationForm';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import CareerForm from './pages/CareerForm';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/educationform" element={<EducationForm />} />
          <Route path='/careerform' element={<CareerForm/>}/>
          <Route path="/testimonial" element={<Testimonials />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




