// src/components/DestinationCard.jsx
/*
import React from 'react';
import './DestinationCard.css'; // Importar archivo CSS para los estilos

function DestinationCard({ image, title, description }) {
    return (
        <div className="destination-card">
        <img src={image} alt={title} className="destination-image" />
        <h3 className="destination-title">{title}</h3>
        <p className="destination-description">{description}</p>
        <div className="destination-icons">
            {}           
            <button className="destination-btn">Ver Más</button>
        </div>
        </div>
    );
}

export default DestinationCard;
*/
// src/components/DestinationCard.jsx
import React from 'react';
import './DestinationCard.css';

const DestinationCard = ({ name, description, category, function: siteFunction, img }) => {
    return (
        <div className="destination-card">
        <img src={img} alt={name} className="destination-image" />
        <h3 className="destination-title">{name}</h3>
        <p className="destination-description">{description}</p>
        <p className="destination-category"><strong>Category:</strong> {category}</p>
        <p className="destination-function"><strong>Function:</strong> {siteFunction}</p>
        </div>
    );
};

export default DestinationCard;
