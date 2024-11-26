import axios from 'axios';

// API Key de OpenWeatherMap
const API_KEY = '6d71ef0f6689519583c8b95dbc71d69b'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Función para obtener el clima actual
export const getWeather = async (city = 'Ancón, PE', units = 'metric') => {
    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: units, // 'metric' para grados Celsius
                lang: 'es', // Para obtener la descripción en español
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos de clima:', error);
        throw error;
    }
};

export const getForecast = async (city = 'Ancón, PE', units = 'metric') => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
            params: {
                q: city,
                appid: API_KEY,
                units: units,
                lang: 'es',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener el pronóstico:', error);
        throw error;
    }
};



