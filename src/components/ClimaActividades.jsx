import React, { useEffect, useState } from 'react';
import { getWeather, getForecast } from '../services/weatherService';
import { getTouristSites } from '../services/firestoreService';
import './ClimaActividades.css'; // Importamos el archivo CSS

const ClimaActividades = () => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [selectedTime, setSelectedTime] = useState('current');
    const [recommendations, setRecommendations] = useState('');
    const [touristSites, setTouristSites] = useState([]);
    const [filteredSites, setFilteredSites] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const currentWeather = await getWeather();
                const forecastData = await getForecast();

                setWeather(currentWeather);
                setForecast(forecastData.list.slice(0, 8));

                provideRecommendations(currentWeather);
            } catch (error) {
                console.error('Error al obtener datos del clima:', error);
            }
        };

        const fetchTouristSites = async () => {
            try {
                const sites = await getTouristSites();
                setTouristSites(sites);
            } catch (error) {
                console.error('Error al obtener sitios turísticos:', error);
            }
        };

        fetchWeatherData();
        fetchTouristSites();
    }, []);

    const provideRecommendations = (data) => {
        if (!data) return;

        const description = data.weather[0].description;
        const temp = data.main.temp;

        let filtered = [];

        if (description.includes('lluvia') || description.includes('tormenta')) {
            setRecommendations('Recomendamos actividades en interiores como museos, cafés y galerías de arte.');
            filtered = filterSitesByIds(['xKwd9H6umN44QHzZiFAr', 'wMUShknE4IVFkteK5w0n', 'YFdnQDhJ3kGyyDXx5Ray']);
        } else if (temp > 20 && description.includes('cielo claro')) {
            setRecommendations('Es un buen día para actividades al aire libre. Visita parques, senderos naturales o disfruta de un paseo por la ciudad.');
            filtered = filterSitesByIds(['wdP32h0MUyLazieMLnQQ', 'QR1RIyn1bLmNerdxoMLT', 'iTz6iffyeKQdtBNF3hEv']);
        } else if (temp < 10) {
            setRecommendations('Hace frío afuera. Recomendamos actividades en interiores como bibliotecas, centros comerciales o cafés.');
            filtered = filterSitesByIds(['wMUShknE4IVFkteK5w0n', 'xKwd9H6umN44QHzZiFAr']);
        } else {
            setRecommendations('Es un clima agradable para actividades suaves al aire libre, como paseos o visitas a mercados al aire libre.');
            filtered = filterSitesByIds(['yw7Kr09PeoYII837z1HU']);
        }

        setFilteredSites(filtered);
    };

    const filterSitesByIds = (ids) => {
        return touristSites.filter((site) => ids.includes(site.id));
    };

    const handleTimeChange = (event) => {
        const value = event.target.value;
        setSelectedTime(value);

        if (value === 'current') {
            provideRecommendations(weather);
        } else {
            provideRecommendations(forecast[value]);
        }
    };

    const selectedForecast = selectedTime === 'current' ? weather : forecast[selectedTime];

    if (!weather || forecast.length === 0 || touristSites.length === 0) return <p>Cargando datos...</p>;

    return (
        <div className="clima-container">
            <h2 className="clima-title">Asistente de Clima Inteligente</h2>
            <div className="clima-content">
                <div className="clima-weather-section">
                    <div className="clima-forecast-container">
                        <h3 className='titleClima'>Clima en {weather.name}</h3>
                        <label className='labelHora'>
                            Hora actual:
                            <select onChange={handleTimeChange} value={selectedTime} className="clima-select">
                                <option value="current">Ahora</option>
                                {forecast.map((entry, index) => (
                                    <option key={index} value={index}>
                                        {new Date(entry.dt * 1000).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true,
                                        })}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {selectedForecast && (
                            <div>
                                <div className="clima-icon-and-temp">
                                    <img
                                        src={`https://openweathermap.org/img/wn/${selectedForecast.weather[0].icon}@2x.png`}
                                        alt="Ícono del clima seleccionado"
                                        className="clima-weather-icon"
                                    />
                                    <span className="clima-temperature">{Math.round(selectedForecast.main.temp)}°C</span>
                                </div>
                                <p className="clima-condition">{selectedForecast.weather[0].description}</p>
                                <div className="clima-additional-info">
                                    <p>Humedad: {selectedForecast.main.humidity}%</p>
                                    <p>Viento: {Math.round(selectedForecast.wind.speed)} km/h</p>
                                    {selectedForecast.pop && <p>Precipitación: {Math.round(selectedForecast.pop * 100)}%</p>}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="clima-divider"></div>
                <div className="clima-recommendation-section">
                    <h3 className='titleReco'>Recomendaciones de Actividades</h3>
                    <p className='pReco'>{recommendations}</p>
                    <div className="clima-tourist-sites">
                        {filteredSites.map((site, index) => (
                            <div key={index} className="clima-site-card">
                                <img src={site.img} alt={site.nombre} className="clima-site-image" />
                                <p>{site.nombre}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClimaActividades;
