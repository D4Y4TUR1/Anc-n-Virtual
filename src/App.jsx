// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationsSection from './components/DestinationsSection';
import Footer from './components/Footer'; // Importar el Footer

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><DestinationsSection /> </>  } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

  




