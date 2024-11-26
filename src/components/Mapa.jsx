import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = ({ lugares }) => {
    useEffect(() => {
        // Inicializar el mapa
        const map = L.map('map').setView([10.1234, -84.1234], 13);

        // Añadir el mapa base
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // Agregar marcadores y línea de recorrido
        const puntos = [];
        lugares.forEach((lugar) => {
            const marker = L.marker([lugar.lat, lugar.lng]).addTo(map);
            marker.bindPopup(`<b>${lugar.nombre}</b>`).openPopup();
            puntos.push([lugar.lat, lugar.lng]);
        });

        if (puntos.length > 1) {
            L.polyline(puntos, { color: 'blue' }).addTo(map);
        }

        // Limpiar el mapa al desmontar el componente
        return () => {
            map.remove();
        };
    }, [lugares]);

    return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default Mapa;
