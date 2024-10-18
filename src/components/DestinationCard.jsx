import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationCard.css'; 

const DestinationCard = ({ sitio }) => {
    return (
        <div className="destination-card">
        <img src={sitio.img} alt={sitio.nombre} className='destination-image' />
        <h3 className="destination-title">{sitio.nombre}</h3>
        <p className='destination-function'>{sitio.funcion} </p>
        <p className="destination-description">{sitio.descripcion}</p>
        <Link to={`/tour-virtual/${sitio.id}`}>
            <button>Ver Tour Virtual</button>
        </Link>
        </div>
    );
};

export default DestinationCard;
