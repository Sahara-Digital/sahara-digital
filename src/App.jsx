import React from 'react';
import Header from './components/header/index';
import Routes from './app-routes';
import Footer from './components/footer';
import AppContent from './app-content';
import './App.css';

function App() {
  return (
    <div className="qa-app-container">
      <Routes >
        <Header />
      </Routes>
      <AppContent />
      <Footer />
    </div>
  );
}

export default App;
