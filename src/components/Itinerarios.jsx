// src/components/Itinerarios.js
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet"; // Leaflet para personalización
import {
    getActivities,
    getGastronomicDestinations,
    getAccommodations,
    getTouristSites,
    getEvents
} from "../services/firestoreService";
import "leaflet/dist/leaflet.css"; // Estilos para Leaflet
import "./Itinerarios.css"; // Archivo de estilos

const Itinerarios = () => {
    const [duracion, setDuracion] = useState("");
    const [tematica, setTematica] = useState("");
    const [itinerario, setItinerario] = useState([]);
    const [ubicaciones, setUbicaciones] = useState([]);
    const [ruta, setRuta] = useState([]); // Coordenadas para la ruta generada

    const handleGenerateItinerary = async () => {
        try {
            const activities = await getActivities();
            const gastronomicDestinations = await getGastronomicDestinations();
            const accommodations = await getAccommodations();
            const touristSites = await getTouristSites();
            const events = await getEvents();

            let newItinerary = [];
            let newLocations = [];

            if (duracion === "1 día" && tematica === "cultural") {
                newItinerary = [
                    `9:00 AM: Visita a **${touristSites[0]?.nombre || "un destino cultural"}**`,
                    `11:00 AM: Explora **${touristSites[1]?.nombre || "otro sitio cultural"}**`,
                    `1:00 PM: Almuerzo en **${gastronomicDestinations[0]?.nombre || "un restaurante local"}**`,
                    `3:00 PM: Paseo por el **${touristSites[2]?.nombre }**`,
                ];

                newLocations = [
                    touristSites[0]?.ubicacion,
                    touristSites[1]?.ubicacion,
                    gastronomicDestinations[0]?.ubicacion,
                    touristSites[2]?.ubicacion
                ].filter(Boolean);
            }
            else if (duracion === "2 días" && tematica === "aventura") {
                newItinerary = [
                    `Día 1: Actividades acuáticas en **${activities[0]?.nombre || "una playa"}** y deportes en la arena`,
                    `Día 1: Atardecer en **${touristSites[2]?.nombre || "un lugar turístico"}**`,
                    `Día 2: Senderismo por áreas naturales`,
                    `Día 2: Almuerzo en **${gastronomicDestinations[1]?.nombre || "un restaurante local"}**`,
                ];
            } else if (duracion === "una semana" && tematica === "relax") {
                newItinerary = [
                    `Día 1-2: Descanso en **${accommodations[0]?.nombre || "un lugar de hospedaje"}**`,
                    `Día 3-4: Exploración relajada en **${touristSites[3]?.nombre || "un destino turístico"}**`,
                    `Día 5-6: Experiencia gastronómica completa en **${gastronomicDestinations[2]?.nombre || "un restaurante destacado"}**`,
                    `Día 7: Relax total en **${accommodations[1]?.nombre || "otro alojamiento"}**`,
                ];
            } else if (duracion === "1 día" && tematica === "gastronómico") {
                newItinerary = gastronomicDestinations.map((destino) => {
                    const comida = destino.comidas[0]?.nombre || "comida no disponible";
                    const bebida = destino.bebidas[0]?.nombre || "bebida no disponible";
                    return `Disfruta de **${comida}** y **${bebida}** en **${destino.nombre}**`;
                });
            } else {
                newItinerary = ["Selecciona una duración y temática para generar un itinerario."];
            }

            setItinerario(newItinerary);
            setUbicaciones(newLocations);

            if (newLocations.length > 1) {
                const route = await fetchRoute(newLocations);
                setRuta(route);
            }
        } catch (error) {
            console.error("Error al generar el itinerario:", error);
        }
    };

    const fetchRoute = async (locations) => {
        const API_KEY = "5b3ce3597851110001cf62489798a2ca9e6b4885b025575be2d49234";
        const coordinates = locations.map((loc) => [loc._long, loc._lat]);
    
        const body = {
            coordinates,
            instructions: false,
        };
    
        const response = await fetch(
            "/api/openrouteservice/v2/directions/driving-car",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: API_KEY,
                },
                body: JSON.stringify(body),
            }
        );
    
        const data = await response.json();
        return data.features[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    };
    

    return (
        <div className="itinerarios-container">
            <h1 className="itinerarios-title">Generador de Itinerarios</h1>
            <form
                className="itinerarios-form-container"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleGenerateItinerary();
                }}
            >
                <div className="itinerarios-form-group">
                    <label>Duración:</label>
                    <select
                        value={duracion}
                        onChange={(e) => setDuracion(e.target.value)}
                        required
                    >
                        <option value="">Selecciona una duración</option>
                        <option value="1 día">1 día</option>
                        <option value="2 días">2 días</option>
                        <option value="una semana">Una semana</option>
                    </select>
                </div>

                <div className="itinerarios-form-group">
                    <label>Temática:</label>
                    <select
                        value={tematica}
                        onChange={(e) => setTematica(e.target.value)}
                        required
                    >
                        <option value="">Selecciona una temática</option>
                        <option value="cultural">Cultural</option>
                        <option value="aventura">Aventura</option>
                        <option value="relax">Relax</option>
                        <option value="gastronómico">Gastronómico</option>
                    </select>
                </div>

                <button type="submit" className="itinerarios-generate-btn">
                    Generar Itinerario
                </button>
            </form>

            <div className="itinerarios-result">
                <h2 className="itinerarios-result-title">Itinerario Generado</h2>
                <ul>
                    {itinerario.map((actividad, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: actividad }}></li>
                    ))}
                </ul>
            </div>

            {ubicaciones.length > 0 && (
                <div className="itinerarios-map">
                    <h2>Mapa del Recorrido</h2>
                    <MapContainer
                        center={[ubicaciones[0]._lat, ubicaciones[0]._long]}
                        zoom={13}
                        style={{ height: "500px", width: "100%" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {ubicaciones.map((ubicacion, index) => (
                            <Marker
                                key={index}
                                position={[ubicacion._lat, ubicacion._long]}
                            >
                                <Popup>{itinerario[index]}</Popup>
                            </Marker>
                        ))}
                        {ruta.length > 0 && <Polyline positions={ruta} color="blue" />}
                    </MapContainer>
                </div>
            )}
        </div>
    );
};

export default Itinerarios;