// src/components/TourVirtual.jsx
import React, { useEffect, useState } from 'react';
import { Pannellum } from 'pannellum-react';
import { useParams } from 'react-router-dom';
import { getTouristSites } from '../services/firestoreService';

// Importa las imágenes
import DescriptionIcon from '../assets/icons/informacion.gif';
import LocationIcon from '../assets/icons/icono ubicacion.gif';
import HideControlsIcon from '../assets/icons/esconder.gif';
import ShowControlsIcon from '../assets/icons/mostrar.gif';
import ImageIcon from '../assets/icons/mapas.gif';

const TourVirtual = () => {
    const { id } = useParams();
    const [images, setImages] = useState({});
    const [currentImage, setCurrentImage] = useState('');
    const [showControls, setShowControls] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [siteInfo, setSiteInfo] = useState({ informacion: '', ubicacion: '', iframe: '' });

    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const sites = await getTouristSites();
                const site = sites.find((s) => s.id === id);
                if (site) {
                    setImages({
                        entrada: site.img360_Entrada,
                        intermedio: site.img360_PuntoIntermedio1,
                        final: site.img360_VistaFinal,
                        mapa: site.mapa,
                        img: site.img,
                    });
                    setSiteInfo({
                        informacion: site.informacion,
                        ubicacion: site.ubicacion,
                        iframe: site.iframe, // Guardamos el iframe del sitio
                    });
                    setCurrentImage(site.img360_Entrada);
                }
            } catch (error) {
                console.error('Error al cargar los datos del sitio:', error);
            }
        };

        fetchTourData();
    }, [id]);

    const handleNextImage = () => {
        if (currentImage === images.entrada) {
            setCurrentImage(images.intermedio);
        } else if (currentImage === images.intermedio) {
            setCurrentImage(images.final);
        } else {
            setCurrentImage(images.entrada);
        }
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleSectionClick = (section) => {
        setActiveSection(section);
        setMenuOpen(false);
    };

    const toggleControls = () => {
        setShowControls(!showControls);
    };

    if (!currentImage) return <p>Cargando tour virtual...</p>;

    return (
        <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
            <button
                onClick={toggleMenu}
                style={{
                    position: 'absolute',
                    top: '100px',
                    right: '35px',
                    zIndex: 2,
                    padding: '10px',
                    cursor: 'pointer',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '2px solid #ddd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s, transform 0.2s',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                ☰
            </button>

            {menuOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '170px',
                        right: '20px',
                        zIndex: 2,
                        padding: '0px',
                        width: '90px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                >
                    <button
                        onClick={() => handleSectionClick('description')}
                        style={circularButtonStyle}
                    >
                        <img src={DescriptionIcon} alt="Descripción" style={iconStyle} />
                    </button>
                    <button
                        onClick={() => handleSectionClick('location')}
                        style={circularButtonStyle}
                    >
                        <img src={LocationIcon} alt="Ubicación" style={iconStyle} />
                    </button>
                    <button onClick={toggleControls} style={circularButtonStyle}>
                        <img
                            src={showControls ? HideControlsIcon : ShowControlsIcon}
                            alt={showControls ? 'Ocultar Controles' : 'Mostrar Controles'}
                            style={iconStyle}
                        />
                    </button>
                    <button
                        onClick={() => handleSectionClick('image')}
                        style={circularButtonStyle}
                    >
                        <img src={ImageIcon} alt="Mostrar Imagen" style={iconStyle} />
                    </button>
                </div>
            )}

            {activeSection === 'description' && (
                <div style={modalStyle}>
                    <img src={images.img} alt="Imagen del sitio" style={{ width: '70%', borderRadius: '5%', border: '2px solid #ddd' }} />
                    <p>Descripción del sitio turístico.</p>
                    <p>{siteInfo.informacion}</p>
                    <button onClick={() => setActiveSection(null)}>Cerrar</button>
                </div>
            )}

            {activeSection === 'location' && (
                <div style={modalStyle}>
                    <div
                        dangerouslySetInnerHTML={{ __html: siteInfo.iframe }}
                    />
                    <p>Ubicación del sitio: </p>
                    <p>{siteInfo.ubicacion}</p> {/* Mostrar la ubicación */}
                    <button onClick={() => setActiveSection(null)}>Cerrar</button>
                </div>
            )}

            {activeSection === 'image' && (
                <div style={modalStyle2}>
                    <img src={images.mapa} alt="Vista del sitio" style={{ width: '100%' }} />
                    <button onClick={() => setActiveSection(null)}>Cerrar</button>
                </div>
            )}

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
                showZoomCtrl={showControls}
                showFullscreenCtrl={showControls}
                onLoad={() => {
                    console.log('Panorama cargado');
                }}
            />
        </div>
    );
};

const circularButtonStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '2px solid #ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const iconStyle = {
    width: '40px',
    height: '40px',
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.25)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
};

const modalStyle2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 3,
    padding: '0px',
};

export default TourVirtual;
