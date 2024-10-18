// src/components/TourVirtual.jsx
import React, { useEffect, useState } from 'react';
import { Pannellum } from 'pannellum-react';
import { useParams } from 'react-router-dom';
import { getTouristSites } from '../services/firestoreService';

const TourVirtual = () => {
    const { id } = useParams(); // Obtener ID del destino desde la URL
    const [images, setImages] = useState({}); // Almacenar las imágenes del sitio
    const [currentImage, setCurrentImage] = useState(''); // Imagen actual

    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const sites = await getTouristSites(); // Obtener datos de Firestore
                const site = sites.find((s) => s.id === id); // Buscar el sitio correspondiente
                if (site) {
                    setImages({
                        entrada: site.img360_Entrada,
                        intermedio: site.img360_PuntoIntermedio1,
                        final: site.img360_VistaFinal,
                    });
                    setCurrentImage(site.img360_Entrada); // Establecer imagen inicial
                }
            } catch (error) {
                console.error('Error al cargar los datos del sitio:', error);
            }
        };

        fetchTourData();
    }, [id]);

    const handleNextImage = () => {
        // Cambiar entre las imágenes disponibles
        if (currentImage === images.entrada) {
            setCurrentImage(images.intermedio);
        } else if (currentImage === images.intermedio) {
            setCurrentImage(images.final);
        } else {
            setCurrentImage(images.entrada);
        }
    };

    if (!currentImage) return <p>Cargando tour virtual...</p>;

    return (
        <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
            <button 
                onClick={handleNextImage} 
                style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}
            >
                Cambiar Vista
            </button>

            <Pannellum
                width="100%"
                height="100%"
                image={currentImage}
                pitch={10}
                yaw={180}
                hfov={110}
                autoLoad
                onLoad={() => {
                    console.log('Panorama cargado');
                }}
            />
        </div>
    );
};

export default TourVirtual;


