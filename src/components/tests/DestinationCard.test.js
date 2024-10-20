import '@testing-library/jest-dom';
import React from 'react';  // Agrega esta línea
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import DestinationCard from '../../components/DestinationCard.jsx';

const mockSitio = {
    img: 'image-url.jpg',
    nombre: 'Parroquia San Pedro',
    funcion: 'Guía, congrega y fortalece la fe de la comunidad',
    descripcion: 'Hermosa playa tropical',
};

test('Muestra el nombre del destino', () => {
    render(
        <BrowserRouter>
            <DestinationCard sitio={mockSitio} />
        </BrowserRouter>
    );
    const nameElement = screen.getByText(/Parroquia San Pedro/i);
    expect(nameElement).toBeInTheDocument();
});


