// src/components/Gallery.jsx
import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null); // Agrega este estado para la imagen seleccionada

    const images = [
        { src: "Chosas.webp", alt: "Playa toma de sol" },
        { src: "Portada Malecon Ferreyros.jpg", alt: "Portada Malecon" },
        { src: "Vista.webp", alt: "Vista Playa" },
        { src: "Sirena Muelle.jpg", alt: "Estatua en Ancón" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length + 1));
        }, 3000); // Cambia cada 3 segundos
        return () => clearInterval(interval);
    }, [images.length]);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery">
            <section className="gallery-header">
                <h1>Galería de Imágenes</h1>
                <p>Descubre los destinos turísticos de Ancón.</p>
            </section>

            <section className="gallery-carousel">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 50}%)` }}
                >
                    {images.concat(images[0]).map((image, index) => (
                        <div className="carousel-image" key={index} onClick={() => openModal(image.src)}>
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="gallery-description">
                <h2>Descripción del lugar</h2>
                <p>
                    Visitar Ancón te ofrece una experiencia única llena de historia, cultura y belleza natural.
                    Cada sitio turístico revela un aspecto fascinante de esta joya costera.
                </p>
                <button>Explorar</button>
                <button>Más</button>
            </section>

            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <img src={selectedImage} alt="Imagen ampliada" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
    

