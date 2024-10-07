// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationsSection from './components/DestinationsSection';
import Footer from './components/Footer'; // Importar el Footer

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <DestinationsSection />
      <Footer />
    </div>
  );
}

export default App;






