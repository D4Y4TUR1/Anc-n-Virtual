// src/services/firestoreService.js
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

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
