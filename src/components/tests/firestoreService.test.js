// firestoreService.test.js
import React from 'react';  // Agrega esta línea
import { getTouristSites } from '../../services/firestoreService';
import { getDocs, collection } from 'firebase/firestore';

jest.mock('firebase/firestore', () => ({
    getFirestore: jest.fn(), 
    collection: jest.fn(),
    getDocs: jest.fn(() => ({
        docs: [
        { id: '9SvNe5FIpoDz6uMdJWJv', data: () => ({ name: 'Parroquia San Pedro' }) },
        { id: 'xKwd9H6umN44QHzZiFAr', data: () => ({ name: 'Museo de sitio' }) },
        ],
    })),
    }));

    test('Obtiene sitios turísticos correctamente', async () => {
    const sites = await getTouristSites();
    expect(sites).toHaveLength(2);
    expect(sites[0].name).toBe('Parroquia San Pedro');
});
