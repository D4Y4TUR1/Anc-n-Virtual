import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Comments from "./Comments";
import PhotoUploadAndRating from "./PhotoUploadAndRating";
import "./Gallery.css";

const Gallery = ({ currentUser }) => {
    const [destinations, setDestinations] = useState([]);
    const [currentDestination, setCurrentDestination] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchDestinations = async () => {
            const db = getFirestore();
            const destRef = collection(db, "destinoTuristico");
            const snapshot = await getDocs(destRef);
            const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setDestinations(data);
            setCurrentDestination(data[0]);
        };

        fetchDestinations();
    }, []);

    const handleNext = () => {
        if (currentDestination) {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % Object.keys(currentDestination).filter((key) => key.startsWith("img360_")).length
            );
        }
    };

    const handlePrev = () => {
        if (currentDestination) {
            setCurrentIndex((prevIndex) =>
                (prevIndex - 1 + Object.keys(currentDestination).filter((key) => key.startsWith("img360_")).length) %
                Object.keys(currentDestination).filter((key) => key.startsWith("img360_")).length
            );
        }
    };

    const handleTabChange = (destinationId) => {
        const selectedDest = destinations.find((dest) => dest.id === destinationId);
        setCurrentDestination(selectedDest);
        setCurrentIndex(0);
    };

    return (
        <div className="gallery-container">
            <div className="gallery-left">
                <section className="gallery-header">
                    <h1>Galería de Imágenes</h1>
                    <p>Descubre los destinos turísticos de Ancón.</p>
                </section>

                <section className="tabs">
                    {destinations.map((dest) => (
                        <button
                            key={dest.id}
                            onClick={() => handleTabChange(dest.id)}
                            className={currentDestination?.id === dest.id ? "active" : ""}
                        >
                            {dest.nombre}
                        </button>
                    ))}
                </section>

                {currentDestination && (
                    <>
                        <section className="gallery-carousel">
                            <button className="carousel-btn prev" onClick={handlePrev}>
                                &lt;
                            </button>
                            <div className="carousel-track-container">
                                <div
                                    className="carousel-track"
                                    style={{
                                        transform: `translateX(-${currentIndex * 100}%)`,
                                    }}
                                >
                                    {Object.entries(currentDestination)
                                        .filter(([key]) => key.startsWith("img360_"))
                                        .map(([key, imgUrl], index) => (
                                            <div
                                                className={`carousel-image ${index === currentIndex ? "active" : ""}`}
                                                key={index}
                                                onClick={() => setSelectedImage(imgUrl)}
                                            >
                                                <img src={imgUrl} alt={`Imagen ${index + 1}`} />
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <button className="carousel-btn next" onClick={handleNext}>
                                &gt;
                            </button>
                        </section>

                        <section>
                        <PhotoUploadAndRating
                            destinationId={currentDestination.id}
                            currentUser={currentUser}
                        />
                        </section>

                        <section className="gallery-description">
                            <h2>{currentDestination.nombre}</h2>
                            <p>{currentDestination.descripcion}</p>
                            <button>Explorar</button>
                            <button>Más</button>
                        </section>
                    </>
                )}

            </div>

            <div className="gallery-right">
                {currentDestination && (
                    <>
                        <Comments
                            destinationId={currentDestination.id}
                            destinationName={currentDestination.nombre}
                            currentUser={currentUser}
                        />
                    </>
                )}
            </div>

            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content">
                        <span className="close-button" onClick={() => setSelectedImage(null)}>
                            &times;
                        </span>
                        <img src={selectedImage} alt="Imagen ampliada" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
