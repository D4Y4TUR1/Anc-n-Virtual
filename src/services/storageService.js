// src/services/storageService.js
import { storage } from './firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const uploadImage = async (file) => {
    const storageRef = ref(storage, `images/${file.name}`);
    try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL; // URL para acceder a la imagen subida
    } catch (e) {
        console.error('Error al subir el archivo: ', e);
        throw e;
    }
};

export { uploadImage };
