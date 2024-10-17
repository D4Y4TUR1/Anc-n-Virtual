import React, { Suspense, useEffect, useState, useTransition } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useParams } from 'react-router-dom';
import { getTouristSites } from '../services/firestoreService';

const TourVirtual = () => {
    const { id } = useParams();
    const [tourData, setTourData] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const sites = await getTouristSites();
                const site = sites.find((s) => s.id === id);

                startTransition(() => {
                    setTourData(site);
                    setCurrentImage(site?.img360_Entrada);
                });
            } catch (error) {
                console.error('Error cargando datos del sitio:', error);
            }
        };

        fetchTourData();
    }, [id]);

    const handleNextImage = () => {
        startTransition(() => {
            if (currentImage === tourData.img360_Entrada) {
                setCurrentImage(tourData.img360_PuntoIntermedio1);
            } else if (currentImage === tourData.img360_PuntoIntermedio1) {
                setCurrentImage(tourData.img360_VistaFinal);
            } else {
                setCurrentImage(tourData.img360_Entrada);
            }
        });
    };

    // Solo carga la textura si currentImage tiene un valor válido
    const texture = currentImage ? useLoader(TextureLoader, currentImage) : null;

    if (!tourData || !currentImage) {
        return <p>Cargando tour virtual...</p>;
    }

    if (!texture) {
        return <p>Error al cargar la imagen</p>;
    }

    return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
    <button onClick={handleNextImage} style={{ position: 'absolute', zIndex: 1 }}>
        Cambiar Vista
    </button>
    <Canvas>
        <Suspense fallback={<span>Cargando imagen...</span>}>
        <Sphere args={[500, 60, 40]} scale={[-1, 1, 1]}>
            <meshBasicMaterial attach="material" map={texture} />
        </Sphere>
        </Suspense>
    </Canvas>
    </div>

    );
};

export default TourVirtual;


