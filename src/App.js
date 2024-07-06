import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import PersonalDetails from './pages/PersonalDetails '; // Adjusted import
import EducationalDetails from './pages/EducationalDetails'; // Adjusted import
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import CareerForm from './pages/CareerForm';
// import SearchForm from './components/SearchForm'; // Adjusted import

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
          <Route path="/register" element={<PersonalDetails />} /> {/* Updated route */}
          <Route path="/educationform" element={<EducationalDetails />} /> {/* Updated route */}
          <Route path="/careerform" element={<CareerForm />} />
          <Route path="/testimonial" element={<Testimonials />} />
          {/* <Route path="/search" element={<SearchForm />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
