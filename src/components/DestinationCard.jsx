import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DestinationCard.css';

const DestinationCard = ({ sitio }) => {
    const navigate = useNavigate();

    const handleViewTour = () => {
        // Navega a la ruta de Tour Virtual con el `destinationId` como parte del estado de navegación
        navigate(`/tour-virtual/${sitio.id}`, { state: { destinationId: sitio.id } });
    };

    return (
        <div className="destination-card">
            <img src={sitio.img} alt={sitio.nombre} className='destination-image' />
            <h3 className="destination-title">{sitio.nombre}</h3>
            <p className='destination-function'>{sitio.funcion} </p>
            <p className="destination-description">{sitio.descripcion}</p>
            <button onClick={handleViewTour}>Ver Tour Virtual</button>
        </div>
    );
};

export default DestinationCard;
