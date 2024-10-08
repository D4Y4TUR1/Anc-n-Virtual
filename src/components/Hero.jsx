// src/components/Hero.jsx
import React from 'react';
import './Hero.css'; // Importar archivo CSS para los estilos

function Hero() {
    return (
        <section className="hero">
        <div className="hero-content">
            <h1>Descubre los encantos de Ancón</h1>
            <p>
            Ancón es un destino turístico fascinante que ofrece playas hermosas y una rica historia cultural. 
            Ven y explora sus principales atracciones, desde su vibrante costa hasta sus sitios históricos.
            </p>
            <div className="hero-buttons">
            <button className="hero-btn">Explorar</button>
            <button className="hero-btn hero-btn-outline">Más</button>
            </div>
        </div>
        <div className="hero-image">
            {/* Aquí se puede agregar una imagen como fondo */}
            <img src="Portada-Principal.png" alt="Ancón" />
        </div>
        </section>
    );
    }

export default Hero;
