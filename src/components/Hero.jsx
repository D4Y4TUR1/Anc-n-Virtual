import React, { useState, useEffect } from "react";
import { getFirestore, collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import "./Hero.css"; // Importar archivo CSS para los estilos

function Hero() {
    const [topPhoto, setTopPhoto] = useState(null); // Estado para la imagen con más valoraciones

    useEffect(() => {
        const fetchTopPhoto = async () => {
            const db = getFirestore();

            // Consultar la foto con más valoraciones en Firestore
            const photosRef = collection(db, "destinoTuristico/QR1RIyn1bLmNerdxoMLT/fotosUsuarios");
            const topPhotoQuery = query(photosRef, orderBy("rating", "desc"), limit(1)); // Ordenar por 'rating'
            const snapshot = await getDocs(topPhotoQuery);

            if (!snapshot.empty) {
                const topPhotoData = snapshot.docs[0].data();
                setTopPhoto(topPhotoData.url); // Guardar la URL de la mejor foto
            }
        };

        fetchTopPhoto();
    }, []);

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Descubre los encantos de Ancón</h1>
                <p>
                    Ancón es un destino turístico fascinante que ofrece playas hermosas y una rica historia cultural.
                    Ven y explora sus principales atracciones, desde su vibrante costa hasta sus sitios históricos.
                </p>
                <div className="hero-buttons">
                    <button className="hero-btn">Explorar</button>
                    <button className="hero-btn hero-btn-outline">Más</button>
                </div>
            </div>
            <div className="hero-image">
                {/* Mostrar la imagen dinámica o una imagen de respaldo si no hay fotos */}
                <img
                    src={topPhoto || "Portada-Principal.png"} // Mostrar la imagen con más valoraciones o una por defecto
                    alt="Ancón"
                />
            </div>
        </section>
    );
}

export default Hero;

