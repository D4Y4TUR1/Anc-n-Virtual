// src/components/TourVirtual.jsx
import React, { useEffect, useState } from 'react';
import { Pannellum } from 'pannellum-react';
import { useLocation } from 'react-router-dom';
import { getTouristSites } from '../services/firestoreService';
import dataScene from '../helpers/dataScene';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Importa las imágenes
import DescriptionIcon from '../assets/icons/informacion.gif';
import LocationIcon from '../assets/icons/icono ubicacion.gif';
import HideControlsIcon from '../assets/icons/esconder.gif';
import ShowControlsIcon from '../assets/icons/mostrar.gif';
import ImageIcon from '../assets/icons/mapas.gif';

// Estilos de los botones y modales
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
    width: '80vw',  // Ajusta el ancho
    height: '80vh',  // Ajusta la altura
};

const modalStyle2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 3,
    padding: '0px',

};


const TourVirtual = () => {
    const [images, setImages] = useState({});
    const [currentImage, setCurrentImage] = useState('');
    const [showControls, setShowControls] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [siteInfo, setSiteInfo] = useState({ informacion: '', ubicacion: '', iframe: '', coordenadas: null });
    const [scene, setScene] = useState(null);
    const [sceneData, setSceneData] = useState(null);

    // Obtiene el ID del destino desde el estado de la navegación
    const location = useLocation();
    const { destinationId } = location.state;
    const scenes = dataScene[destinationId] || dataScene['defaultScene'];

    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const sites = await getTouristSites();
                const site = sites.find((s) => s.id === destinationId);
                if (site) {
                    // Imprime el valor completo del sitio turístico para verificar las coordenadas
                    console.log("Datos del sitio:", site);
                    const imagesData = {
                        entrada: site.img360_Entrada,
                        intermedio1: site.img360_PuntoIntermedio1 ?? site.img360_VistaFinal,
                        intermedio2: site.img360_PuntoIntermedio2 ?? site.img360_VistaFinal,
                        intermedio3: site.img360_PuntoIntermedio3 ?? site.img360_VistaFinal,
                        intermedio4: site.img360_PuntoIntermedio4 ?? site.img360_VistaFinal,
                        final: site.img360_VistaFinal,
                        mapa: site.mapa,
                        img: site.img,
                    };
                    setImages(imagesData);

                    const dynamicScenes = {
                        insideMain: {
                            image: site.img360_Entrada,
                            hotSpots: dataScene[destinationId].insideMain.hotSpots,
                        },
                        insideOne: {
                            image: site.img360_PuntoIntermedio1 ?? site.img360_VistaFinal,
                            hotSpots: dataScene[destinationId].insideOne.hotSpots,
                        },
                        insideTwo: {
                            image: site.img360_PuntoIntermedio2 ?? site.img360_VistaFinal,
                            hotSpots: dataScene[destinationId].insideTwo.hotSpots,
                        },
                        insideThree: {
                            image: site.img360_PuntoIntermedio3 ?? site.img360_VistaFinal,
                            hotSpots: dataScene[destinationId].insideThree.hotSpots,
                        },
                        insideFour: {
                            image: site.img360_PuntoIntermedio4 ?? site.img360_VistaFinal,
                            hotSpots: dataScene[destinationId].insideFour.hotSpots,
                        },
                        insideFinal: {
                            image: site.img360_VistaFinal,
                            hotSpots: dataScene[destinationId].insideFinal.hotSpots,
                        },
                        mapView: {
                            image: site.mapa, // La imagen del mapa
                            hotSpots: dataScene[destinationId].mapView.hotSpots, // Hotspots del mapa
                        },
                    };

                    setSceneData(dynamicScenes);
                    setScene(dynamicScenes.insideMain);
                    setCurrentImage(site.img360_Entrada);
                    setSiteInfo({
                        informacion: site.informacion,
                        ubicacion: site.ubicacion,
                        nombre: site.nombre,
                        iframe: site.iframe,
                        coordenadas: site.coordenadas, // Coordenadas predeterminadas
                    });
                }
            } catch (error) {
                console.error('Error al cargar los datos del sitio:', error);
            }
        };

        fetchTourData();
    }, [destinationId]);

    const handleSceneChange = (newScene) => {
        if (sceneData && sceneData[newScene]) {
            setScene(sceneData[newScene]);
            setCurrentImage(sceneData[newScene].image);
        }
    };

    const handleNextImage = () => {
        if (currentImage === images.entrada) {
            setCurrentImage(images.intermedio1);
        } else if (currentImage === images.intermedio1) {
            setCurrentImage(images.intermedio2);
        } else if (currentImage === images.intermedio2) {
            setCurrentImage(images.intermedio3);
        } else if (currentImage === images.intermedio3) {
            setCurrentImage(images.intermedio4);
        } else if (currentImage === images.intermedio4) {
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

    const toggleControls = () => setShowControls(!showControls);

    if (!currentImage) return <p>Cargando tour virtual...</p>;

    const dynamicScenes = (Element, i) => {
        if (Element.cssClass === 'hotspotElement') {
            return (
                <Pannellum.Hotspot
                    key={i}
                    type={Element.type}
                    pitch={Element.pitch}
                    yaw={Element.yaw}
                    cssClass={Element.cssClass}
                    handleClick={() => alert('Click')}
                />
            );
        } else if (Element.cssClass === 'moveScene') {
            return (
                <Pannellum.Hotspot
                    key={i}
                    type={Element.type}
                    pitch={Element.pitch}
                    yaw={Element.yaw}
                    cssClass={Element.cssClass}
                    handleClick={() => handleSceneChange(Element.scene)}
                />
            );
        }
    };

    const renderMapHotspots = (hotSpots) => {
        return Object.values(hotSpots).map((Element, i) => (
            <Pannellum.Hotspot
                key={i}
                type={Element.type}
                pitch={Element.pitch}
                yaw={Element.yaw}
                cssClass={Element.cssClass}
                handleClick={() => handleSceneChange(Element.scene)} // Cambiar de escena al hacer clic
            />
        ));
    };

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
                        <img src={ImageIcon} alt="Mostrar Mapa" style={iconStyle} />
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
                    <MapContainer center={{ lat: siteInfo.coordenadas._lat, lng: siteInfo.coordenadas._long }} zoom={100} style={{ width: '100%', height: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={{ lat: siteInfo.coordenadas._lat, lng: siteInfo.coordenadas._long }}>
                            <Popup>{siteInfo.nombre}</Popup>
                        </Marker>
                    </MapContainer>
                    <p>Ubicación del sitio: </p>
                    <p>{siteInfo.ubicacion}</p>
                    <button onClick={() => setActiveSection(null)}>Cerrar</button>
                </div>
            )}

{activeSection === 'image' && (
    <div style={modalStyle2}>
        {/* Renderiza la imagen del mapa sin usar Pannellum */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src={sceneData.mapView.image} alt="Vista del sitio" style={{ width: '100%', height: 'auto' }} />

            {/* Renderiza los hotspots como botones sobre la imagen */}
            {Object.values(sceneData.mapView.hotSpots).map((Element, i) => (
                <button
                    key={i}
                    style={{
                        position: 'absolute',
                        top: `${Element.pitch}%`, // Ajusta las posiciones según el formato de `pitch` y `yaw`
                        left: `${Element.yaw}%`,
                        transform: 'translate(-50%, -50%)',
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                        border: 'none',
                    }}
                    onClick={() => handleSceneChange(Element.scene)}
                    className={Element.cssClass} // Si tienes estilos específicos para el hotspot
                >
                    {/* Puedes poner un icono o estilo para el botón del hotspot */}
                    🔵
                </button>
            ))}
        </div>
        <button onClick={() => setActiveSection(null)}>Cerrar</button>
    </div>
)}

            <button
                onClick={handleNextImage}
                style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}
            >
                Cambiar Vista
            </button>

            {scene && (
                <Pannellum
                    width="100%"
                    height="100%"
                    image={currentImage}
                    title={siteInfo.nombre}
                    pitch={23}
                    yaw={93}
                    hfov={110}
                    autoLoad
                    showZoomCtrl={showControls}
                    showFullscreenCtrl={showControls}
                    onLoad={() => {
                        console.log('Panorama cargado');
                    }}
                    hotspotDebug={true}
                    scene={scenes.insideMain}
                >
                {Object.values(scene.hotSpots).map((Element, i) => 
                        dynamicScenes(Element, i)
                    )}
                </Pannellum>
            )}
        </div>
    );
};

export default TourVirtual;
