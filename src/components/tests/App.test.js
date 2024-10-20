// App.test.js
import React from 'react';  // Agrega esta línea
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App.jsx';

test('Navegación al sitio turístico correcto', () => {
    render(<App />);
});
