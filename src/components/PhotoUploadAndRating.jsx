import React, { useState, useEffect } from "react";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    updateDoc,
    setDoc,
    increment, 
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./PhotoUploadAndRating.css";

const PhotoUploadAndRating = ({ destinationId, currentUser }) => {
    const [photos, setPhotos] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const db = getFirestore();
    const storage = getStorage();

    useEffect(() => {
        const fetchPhotos = async () => {
            if (!destinationId) return;

            const photosRef = collection(
                db,
                `destinoTuristico/${destinationId}/fotosUsuarios`
            );
            const snapshot = await getDocs(photosRef);
            const loadedPhotos = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPhotos(loadedPhotos);
        };

        fetchPhotos();
    }, [destinationId, db]);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile || !currentUser) return;
    
        setUploading(true);
        try {
            // Subir la imagen al almacenamiento de Firebase
            const fileRef = ref(storage, `destinoTuristico/${destinationId}/${selectedFile.name}`);
            await uploadBytes(fileRef, selectedFile);
            const downloadURL = await getDownloadURL(fileRef);
    
            // Guardar la información de la imagen en Firestore
            const photosRef = collection(
                db,
                `destinoTuristico/${destinationId}/fotosUsuarios`
            );
            await setDoc(doc(photosRef), {
                url: downloadURL,
                userId: currentUser.uid,
                userEmail: currentUser.email,
                createdAt: new Date(),
                rating: 0,
                likes: {}, // Almacenar los "Me gusta" por usuario
            });
    
            // Incrementar los puntos del usuario en Firestore
            const userRef = doc(db, "usuarios", currentUser.uid);
            await updateDoc(userRef, { points: increment(20) }); // Incrementar en 20 puntos
    
            setSelectedFile(null);
            setUploading(false);
    
            // Refrescar la lista de fotos
            const snapshot = await getDocs(photosRef);
            const loadedPhotos = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPhotos(loadedPhotos);
        } catch (error) {
            console.error("Error al subir la imagen:", error);
            setUploading(false);
        }
    };
    
    const handleLike = async (photoId) => {
        if (!currentUser) return;

        try {
            const photoRef = doc(
                db,
                `destinoTuristico/${destinationId}/fotosUsuarios/${photoId}`
            );

            const photo = photos.find((p) => p.id === photoId);
            const userLikes = photo.likes || {};

            // Alternar el estado del "Me gusta"
            const newLikes = { ...userLikes };
            if (newLikes[currentUser.uid] === 1) {
                // Si ya había dado "Me gusta", lo quita
                delete newLikes[currentUser.uid];
            } else {
                // Si no lo había dado o había dado "No me gusta", lo pone
                newLikes[currentUser.uid] = 1;
            }

            const newRating = Object.values(newLikes).reduce((acc, value) => acc + value, 0);

            await updateDoc(photoRef, { likes: newLikes, rating: newRating });

            // Actualizar el estado local
            setPhotos((prevPhotos) =>
                prevPhotos.map((p) =>
                    p.id === photoId ? { ...p, likes: newLikes, rating: newRating } : p
                )
            );
        } catch (error) {
            console.error("Error al actualizar el Me gusta:", error);
        }
    };

    const handleDislike = async (photoId) => {
        if (!currentUser) return;

        try {
            const photoRef = doc(
                db,
                `destinoTuristico/${destinationId}/fotosUsuarios/${photoId}`
            );

            const photo = photos.find((p) => p.id === photoId);
            const userLikes = photo.likes || {};

            // Alternar el estado del "No me gusta"
            const newLikes = { ...userLikes };
            if (newLikes[currentUser.uid] === -1) {
                // Si ya había dado "No me gusta", lo quita
                delete newLikes[currentUser.uid];
            } else {
                // Si no lo había dado o había dado "Me gusta", lo pone
                newLikes[currentUser.uid] = -1;
            }

            const newRating = Object.values(newLikes).reduce((acc, value) => acc + value, 0);

            await updateDoc(photoRef, { likes: newLikes, rating: newRating });

            // Actualizar el estado local
            setPhotos((prevPhotos) =>
                prevPhotos.map((p) =>
                    p.id === photoId ? { ...p, likes: newLikes, rating: newRating } : p
                )
            );
        } catch (error) {
            console.error("Error al actualizar el No me gusta:", error);
        }
    };

    return (
        <div className="photo-upload-container">
            <h2>Fotos de Usuarios</h2>

            <div className="upload-section">
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload} disabled={uploading}>
                    {uploading ? "Subiendo..." : "Subir Foto"}
                </button>
            </div>

            <div className="photos-section">
                {photos.map((photo) => (
                    <div key={photo.id} className="photo-card">
                        <img src={photo.url} alt="Subida por el usuario" />
                        <p>Subida por: {photo.userEmail}</p>
                        <p>Valoración: {photo.rating}</p>
                        <button
                            onClick={() => handleLike(photo.id)}
                            className={photo.likes?.[currentUser.uid] === 1 ? "liked" : ""}
                        >
                            Me gusta
                        </button>
                        <button
                            onClick={() => handleDislike(photo.id)}
                            className={photo.likes?.[currentUser.uid] === -1 ? "disliked" : ""}
                        >
                            No me gusta
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoUploadAndRating;
