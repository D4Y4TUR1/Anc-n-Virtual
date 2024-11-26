// src/services/firestoreService.js
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore'; // Añadir getDocs aquí

const addSite = async (site) => {
    try {
        const docRef = await addDoc(collection(db, 'sites'), site);
        console.log('Documento escrito con ID: ', docRef.id);
    } catch (e) {
        console.error('Error al añadir el documento: ', e);
    }
};
export { addSite };

const getSites = async () => {
    const querySnapshot = await getDocs(collection(db, 'sites'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
export { getSites };

// Función para obtener las actividades
const getActivities = async () => {
    const querySnapshot = await getDocs(collection(db, 'actividades'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const getGastronomicDestinations = async () => {
    const destinations = [];
    const snapshot = await getDocs(collection(db, "destinoGastronomico"));

    for (const doc of snapshot.docs) {
        const destinationData = { id: doc.id, ...doc.data(), items: [] };

        // Cargar subcolecciones: comidas y bebidas
        const comidasSnapshot = await getDocs(collection(doc.ref, "comidas"));
        const bebidasSnapshot = await getDocs(collection(doc.ref, "bebidas"));

        // Agregar comidas y bebidas al array de items
        destinationData.items = [
            ...comidasSnapshot.docs.map((itemDoc) => ({
                id: itemDoc.id,
                ...itemDoc.data(),
                tipo: "Comida",
            })),
            ...bebidasSnapshot.docs.map((itemDoc) => ({
                id: itemDoc.id,
                ...itemDoc.data(),
                tipo: "Bebida",
            })),
        ];

        destinations.push(destinationData);
    }

    return destinations;
};

// Función para obtener los alojamientos
const getAccommodations = async () => {
    const querySnapshot = await getDocs(collection(db, 'alojamiento'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Función para obtener destinos turísticos
const getTouristSites = async () => {
    const querySnapshot = await getDocs(collection(db, 'destinoTuristico'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Función para obtener eventos
const getEvents = async () => {
    const querySnapshot = await getDocs(collection(db, 'eventos'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export {
    getActivities,
    getGastronomicDestinations,
    getAccommodations,
    getTouristSites,
    getEvents
};

