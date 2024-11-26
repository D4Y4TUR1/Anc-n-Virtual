import React, { useState, useEffect } from "react";
import {
    getActivities,
    getGastronomicDestinations,
    getAccommodations,
    getTouristSites,
    getEvents
} from "../services/firestoreService";
import "./ItinerarioPersonalizado.css"; // Archivo CSS para este componente

const ItinerarioPersonalizado = () => {
    const [expandedRestaurant, setExpandedRestaurant] = useState(null); // Controlar qué restaurante está expandido
    const [touristSites, setTouristSites] = useState([]);
    const [gastronomicDestinations, setGastronomicDestinations] = useState([]);
    const [accommodations, setAccommodations] = useState([]);
    const [activities, setActivities] = useState([]);
    const [events, setEvents] = useState([]);
    const [selectedItems, setSelectedItems] = useState({
        touristSite: null,
        gastronomicItems: [],
        accommodation: null,
        activity: null,
        event: null
    });
    const [itinerary, setItinerary] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Controla qué restaurante está expandido
    const toggleRestaurant = (restaurantId) => {
        setExpandedRestaurant((prev) => (prev === restaurantId ? null : restaurantId));
    };

    // Fetch data from Firestore
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [sites, gastronomy, lodging, act, evts] = await Promise.all([
                    getTouristSites(),
                    getGastronomicDestinations(),
                    getAccommodations(),
                    getActivities(),
                    getEvents()
                ]);
                setTouristSites(sites);
                setGastronomicDestinations(gastronomy);
                setAccommodations(lodging);
                setActivities(act);
                setEvents(evts);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    // Renderiza la sección de Destinos Gastronómicos
    const renderGastronomicDestinations = () => (
        <div className="category">
            <h2>Destinos Gastronómicos</h2>
            <ul>
                {gastronomicDestinations.map((destination) => (
                    <li key={destination.id}>
                        {/* Encabezado del restaurante */}
                        <div
                            className={`restaurant-header ${
                                expandedRestaurant === destination.id ? "expanded" : ""
                            }`}
                            onClick={() => toggleRestaurant(destination.id)}
                        >
                            {destination.nombre}
                        </div>

                        {/* Subcolecciones de elementos (comidas/bebidas) */}
                        {expandedRestaurant === destination.id && (
                            <ul className="gastronomic-items">
                                {destination.items?.map((item) => (
                                    <li
                                        key={item.id}
                                        className={
                                            selectedItems.gastronomicItems.some(
                                                (selected) => selected.id === item.id
                                            )
                                                ? "selected"
                                                : ""
                                        }
                                        onClick={() =>
                                            handleSelection("gastronomicItems", {
                                                ...item,
                                                restaurante: destination.nombre
                                            })
                                        }
                                    >
                                        {item.nombre} - S/ {item.precio || 0}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );

    // Handle selection of items
    const handleSelection = (category, item) => {
        if (category === "gastronomicItems") {
            setSelectedItems((prev) => {
                const updatedItems = prev.gastronomicItems.some((selected) => selected.id === item.id)
                    ? prev.gastronomicItems.filter((selected) => selected.id !== item.id)
                    : [...prev.gastronomicItems, item];
                return { ...prev, gastronomicItems: updatedItems };
            });
        } else {
            setSelectedItems((prev) => ({ ...prev, [category]: item }));
        }
    };

    // Generate the itinerary and calculate total price
    const handleGenerateItinerary = () => {
        const itinerary = [];
        let total = 0;

        if (selectedItems.touristSite) {
            itinerary.push(
                `Visita: ${selectedItems.touristSite.nombre} - Precio: S/ ${selectedItems.touristSite.precio || 0}`
            );
            total += selectedItems.touristSite.precio || 0;
        }

        if (selectedItems.gastronomicItems.length > 0) {
            selectedItems.gastronomicItems.forEach((item) => {
                itinerary.push(
                    `Comida/Bebida: ${item.nombre} (${item.restaurante}) - Precio: S/ ${item.precio || 0}`
                );
                total += item.precio || 0;
            });
        }

        if (selectedItems.accommodation) {
            itinerary.push(
                `Alojamiento en: ${selectedItems.accommodation.nombre} - Precio: S/ ${selectedItems.accommodation.precio || 0}`
            );
            total += selectedItems.accommodation.precio || 0;
        }

        if (selectedItems.activity) {
            itinerary.push(
                `Actividad: ${selectedItems.activity.nombre} - Precio: S/ ${selectedItems.activity.precio || 0}`
            );
            total += selectedItems.activity.precio || 0;
        }

        if (selectedItems.event) {
            itinerary.push(
                `Asistir al evento: ${selectedItems.event.nombre} - Precio: S/ ${selectedItems.event.precio || 0}`
            );
            total += selectedItems.event.precio || 0;
        }

        setItinerary(itinerary);
        setTotalPrice(total);
    };

    return (
        <div className="itinerario-personalizado-container">
            <h1 className="title">Itinerario Personalizado</h1>
            <div className="selection-container">
                <div className="category">
                    <h2>Sitios Turísticos</h2>
                    <ul>
                        {touristSites.map((site) => (
                            <li
                                key={site.id}
                                className={selectedItems.touristSite?.id === site.id ? "selected" : ""}
                                onClick={() => handleSelection("touristSite", site)}
                            >
                                {site.nombre} - S/ {site.precio || 0}
                            </li>
                        ))}
                    </ul>
                </div>

                {renderGastronomicDestinations()}

                <div className="category">
                    <h2>Alojamientos</h2>
                    <ul>
                        {accommodations.map((accommodation) => (
                            <li
                                key={accommodation.id}
                                className={
                                    selectedItems.accommodation?.id === accommodation.id
                                        ? "selected"
                                        : ""
                                }
                                onClick={() => handleSelection("accommodation", accommodation)}
                            >
                                {accommodation.nombre} - S/ {accommodation.precio || 0}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="category">
                    <h2>Actividades</h2>
                    <ul>
                        {activities.map((activity) => (
                            <li
                                key={activity.id}
                                className={
                                    selectedItems.activity?.id === activity.id ? "selected" : ""
                                }
                                onClick={() => handleSelection("activity", activity)}
                            >
                                {activity.nombre} - S/ {activity.precio || 0}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="category">
                    <h2>Eventos</h2>
                    <ul>
                        {events.map((event) => (
                            <li
                                key={event.id}
                                className={selectedItems.event?.id === event.id ? "selected" : ""}
                                onClick={() => handleSelection("event", event)}
                            >
                                {event.nombre} - S/ {event.precio || 0}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <button className="generate-btn" onClick={handleGenerateItinerary}>
                Generar Itinerario
            </button>

            <div className="itinerary-result">
                <h2>Itinerario Generado</h2>
                <ul>
                    {itinerary.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3 className="total-price">Total: S/ {totalPrice}</h3>
            </div>
        </div>
    );
};

export default ItinerarioPersonalizado;
