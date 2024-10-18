// DestinationsSection.jsx
import React, { useEffect, useState } from 'react';
import DestinationCard from './DestinationCard';
import { getTouristSites } from '../services/firestoreService'; // Llamamos la función que trae los datos de Firestore
import './DestinationsSection.css'; // Importar archivo CSS para los estilos

const DestinationsSection = () => {
const [sites, setSites] = useState([]);

useEffect(() => {
    const fetchSites = async () => {
      const data = await getTouristSites(); // Llamada a la función
      setSites(data); // Actualizamos el estado con los sitios obtenidos
    };

    fetchSites();
    }, []);

    return (
        <div className="destinations-section">
            <h2>Destinos Turísticos</h2>
            <p className='destinations-section-p'>Conoce los principales destinos turísticos de Ancón.</p>
            <div className="destinations-grid">
                {sites.map((sitio) => (
                <DestinationCard key={sitio.id} sitio={sitio} />
                ))}
            </div>       
        </div>
    );
};

export default DestinationsSection;
