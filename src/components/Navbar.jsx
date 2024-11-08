// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Función para normalizar el término de búsqueda eliminando tildes
    const normalizeText = (text) => {
        return text
            .normalize("NFD") // Normaliza el texto para separar los caracteres acentuados
            .replace(/[\u0300-\u036f]/g, "") // Elimina los caracteres de acento
            .toLowerCase(); // Convierte a minúsculas para hacer la búsqueda insensible a mayúsculas
    };

    // Maneja el cambio en el campo de entrada de búsqueda
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Función para manejar la búsqueda
    const handleSearch = () => {
        onSearch(normalizeText(searchTerm)); // Llama a onSearch con el término normalizado
        navigate('/visitas'); // Redirige a la página de "Visitas"
    };

    // Función para manejar el evento de presionar "Enter" en el campo de búsqueda
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">
                    <img src={logo} alt="Virtual Ancón" className="logo-image" />
                </a>
            </div>
            <ul className="navbar-menu">
                <li><a href="/visitas">Visitas</a></li>
                <li><a href="/galeria">Galería</a></li>
                <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
                <li><a href="/contactanos">Contáctanos</a></li>
            </ul>
            <div className="navbar-search">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} // Maneja el evento Enter
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>
        </nav>
    );
}

export default Navbar;






