import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import InfoUser from './components/InfoUser/InfoUser';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project';
import Experiences from './components/Experiences/Experiences';
import Formation from './components/Formation/Formation';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';

import './app.css';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <InfoUser />
      <Services />
      <Projects />
      <Project />
      <Experiences />
      <Formation />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
