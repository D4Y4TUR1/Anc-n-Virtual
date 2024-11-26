// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ItinerarioPersonalizado from "./components/ItinerarioPersonalizado";
import Itinerarios from './components/Itinerarios';
import ClimaActividades from './components/ClimaActividades';
import DestinationsSection from './components/DestinationsSection';
import Footer from './components/Footer';
import TourVirtual from './components/TourVirtual';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el término de búsqueda

  // Función para actualizar el término de búsqueda
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="app-container"> {/* Contenedor principal */}
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Itinerarios />
                <ItinerarioPersonalizado />
                <ClimaActividades/>
                <DestinationsSection searchTerm={searchTerm} />
              </>
            } 
          />
          <Route 
            path="/visitas" 
            element={
              <>
                {/* Muestra Hero solo si no hay término de búsqueda activo */}
                {!searchTerm && <Hero /> }
                <Itinerarios />
                <ItinerarioPersonalizado />
                <ClimaActividades/>
                <DestinationsSection searchTerm={searchTerm} />
              </>
            } 
          />
          <Route path="/tour-virtual/:id" element={<TourVirtual />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="/galeria" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


