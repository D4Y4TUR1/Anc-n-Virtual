// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Importar archivo CSS para los estilos

function Navbar() {
    return (
        <nav className="navbar">
        <div className="navbar-logo">
            <h1>Virtual Ancón</h1>
        </div>
        <ul className="navbar-menu">
            <li><a href="#visitas">Visitas</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            <li><a href="#contactanos">Contáctanos</a></li>
        </ul>
        <div className="navbar-search">
            <input type="text" placeholder="Buscar..." />
            <button>Buscar</button>
        </div>
        </nav>
    );
}

export default Navbar;
