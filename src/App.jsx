import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Importación para autenticación
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
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el término de búsqueda
  const [currentUser, setCurrentUser] = useState(null); // Estado para almacenar el usuario logeado

  // Manejar autenticación
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe(); // Limpiar el listener al desmontar
  }, []);

  // Función para actualizar el término de búsqueda
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <DestinationsSection searchTerm={searchTerm} />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/visitas"
            element={
              <>
                {!searchTerm && <Hero />}
                <DestinationsSection searchTerm={searchTerm} />
              </>
            }
          />
          <Route path="/tour-virtual/:id" element={<TourVirtual />} />
          <Route
            path="/itinerario"
            element={
              <>
                <ClimaActividades />
                <Itinerarios />
                <ItinerarioPersonalizado />
              </>
            }
          />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="/galeria" element={<Gallery currentUser={currentUser} />} />
          <Route path="*" element={<Hero />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
