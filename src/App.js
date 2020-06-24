import React from 'react';
import Banner from './components/Banner/Banner';
import InfoUser from './components/InfoUser/InfoUser';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project';

import './app.css';

function App() {
  return (
    <div>
      <Banner />
      <InfoUser />
      <Projects />

      {/* Colocar o component Project dentro do Projects */}
      <Project />
      <Footer />
    </div>
  );
}

export default App;
