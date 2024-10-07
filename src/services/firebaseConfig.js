// src/services/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCoFG1y3cP981nCsifCDDnqeJesWVlR4ho",
    authDomain: "virtual-ancon.firebaseapp.com",
    projectId: "virtual-ancon",
    storageBucket: "virtual-ancon.appspot.com",
    messagingSenderId: "1040672610295",
    appId: "1:1040672610295:web:60d1a0ed61d09965a940f2"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
