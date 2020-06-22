import React from 'react';
import '../css/index.css';
import Footer from '../components/footer';
import Header from '../components/header';
import Particles from 'react-particles-js';
import config from '../assets/particlesjs-config.json'
const AppContent = () => {
  return (
    <>
      <Header />
      <main>
        <Particles
          className={`qa-particle-canvas`}
          params={config}
        />
      </main>
      <Footer />
    </>
  );
}

export default AppContent;