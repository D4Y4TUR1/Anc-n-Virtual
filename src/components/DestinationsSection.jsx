// src/components/DestinationsSection.jsx
import React, { useEffect, useState } from 'react';
import DestinationCard from './DestinationCard';
import { getTouristSites } from '../services/firestoreService';
import './DestinationsSection.css';

const DestinationsSection = ({ searchTerm }) => {
    const [sites, setSites] = useState([]);
    const [filteredSites, setFilteredSites] = useState([]);
    const [category, setCategory] = useState('Todos');
    const [sortBy, setSortBy] = useState('Nombre');

    // Función para normalizar el texto de los nombres de los destinos
    const normalizeText = (text) => {
        return text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    };

    useEffect(() => {
        const fetchSites = async () => {
            const data = await getTouristSites();
            setSites(data);
            setFilteredSites(data);
        };

        fetchSites();
    }, []);

    // Aplicar filtros y ordenamiento cada vez que cambien searchTerm, category, sortBy o sites
    useEffect(() => {
        let filtered = [...sites]; // Hacer una copia para evitar mutaciones directas en sites

        // Filtrar por categoría
        if (category !== 'Todos') {
            filtered = filtered.filter((sitio) => sitio.categoria === category);
        }

        // Filtrar por nombre según el término de búsqueda
        if (searchTerm) {
            filtered = filtered.filter((sitio) =>
                normalizeText(sitio.nombre).includes(normalizeText(searchTerm))
            );
        }

        // Ordenar los destinos según el criterio seleccionado
        if (sortBy === 'Nombre') {
            filtered = filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
        } else if (sortBy === 'Más visitados') {
            filtered = filtered.sort((a, b) => (b.visitas || 0) - (a.visitas || 0));
        }

        setFilteredSites(filtered);
    }, [searchTerm, category, sortBy, sites]);

    return (
        <div className="destinations-section">
            <h2>Destinos Turísticos</h2>
            <p className="destinations-section-p">Conoce los principales destinos turísticos de Ancón.</p>

            <div className="filters">
                {/* Filtro de Categoría */}
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Todos">Todos</option>
                    <option value="Playas">Playas</option>
                    <option value="Recreativos">Recreativos</option>
                    <option value="Historicos">Históricos</option>
                    <option value="Malecones">Malecones</option>
                </select>

                {/* Ordenar por Nombre o Más Visitados */}
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="Nombre">Ordenar por Nombre</option>
                    <option value="Más visitados">Ordenar por Más Visitados</option>
                </select>
            </div>

            <div className="destinations-grid">
                {filteredSites.length > 0 ? (
                    filteredSites.map((sitio) => (
                        <DestinationCard key={sitio.id} sitio={sitio} />
                    ))
                ) : (
                    <p>No se encontraron destinos que coincidan con los filtros seleccionados.</p>
                )}
            </div>
        </div>
    );
};

export default DestinationsSection;




