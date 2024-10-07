// src/components/DestinationCard.jsx
import React from 'react';
import './DestinationCard.css'; // Importar archivo CSS para los estilos

function DestinationCard({ image, title, description }) {
    return (
        <div className="destination-card">
        <img src={image} alt={title} className="destination-image" />
        <h3 className="destination-title">{title}</h3>
        <p className="destination-description">{description}</p>
        <div className="destination-icons">
            {/* Aquí puedes agregar íconos, como íconos de redes sociales */}
            <button className="destination-btn">Ver Más</button>
        </div>
        </div>
    );
}

export default DestinationCard;
