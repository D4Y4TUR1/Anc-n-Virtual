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

const getTouristSites = async () => {
    const querySnapshot = await getDocs(collection(db, 'destinoTuristico'));
    const sites = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(sites); // Verificar los datos obtenidos
    return sites;
};  
export { getTouristSites };

