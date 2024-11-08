// src/components/DestinationCard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DestinationCard.css';

const DestinationCard = ({ sitio }) => {
    const navigate = useNavigate();
    const [visitCount, setVisitCount] = useState(0);

    // Cargar el contador de visitas desde localStorage al montar el componente
    useEffect(() => {
        const storedCount = localStorage.getItem(`visitCount_${sitio.id}`);
        if (storedCount) {
            setVisitCount(parseInt(storedCount, 10));
        }
    }, [sitio.id]);

    // Función para manejar la visualización del tour virtual y aumentar el contador de visitas
    const handleViewTour = () => {
        const newCount = visitCount + 1;
        setVisitCount(newCount);
        localStorage.setItem(`visitCount_${sitio.id}`, newCount); // Guarda el contador en localStorage
        navigate(`/tour-virtual/${sitio.id}`, { state: { destinationId: sitio.id } });
    };

    return (
        <div className="destination-card">
            {/* Imagen del destino */}
            <img src={sitio.img} alt={sitio.nombre} className="destination-image" />
            
            {/* Nombre del destino */}
            <h3 className="destination-title">{sitio.nombre}</h3>
            
            {/* Función o actividad principal del destino */}
            <p className="destination-function">{sitio.funcion}</p>
            
            {/* Descripción breve del destino */}
            <p className="destination-description">{sitio.descripcion}</p>

            {/* Contador de visitas */}
            <p className="visit-counter">Visitas: {visitCount}</p>
            
            {/* Botón para ver el tour virtual */}
            <button onClick={handleViewTour}>Ver Tour Virtual</button>
        </div>
    );
};

export default DestinationCard;



