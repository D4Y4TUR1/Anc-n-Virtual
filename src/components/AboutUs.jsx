// src/components/AboutUs.jsx
import React, { useState, useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const testimonials = [
        { stars: "★★★★★", text: "Los paisajes de Ancón son simplemente impresionantes.", author: "Juan Pérez - Turista, Lima" },
        { stars: "★★★★★", text: "La comida y la cultura son excepcionales aquí.", author: "Ana Gómez - Visitante, Arequipa" },
        { stars: "★★★★★", text: "Definitivamente volveré a visitar Ancón.", author: "Luis Martínez - Turista, Cusco" },
        { stars: "★★★★★", text: "La tranquilidad de la playa es incomparable.", author: "Carla Rivera - Turista, Trujillo" },
        { stars: "★★★★★", text: "Ancón es un destino turístico que todos deberían conocer.", author: "Pedro Alva - Visitante, Iquitos" },
        { stars: "★★★★★", text: "El ambiente familiar es ideal para un día de descanso.", author: "María Fernández - Turista, Tacna" },
        { stars: "★★★★★", text: "Nunca había visto un atardecer tan hermoso como aquí.", author: "José Morales - Turista, Puno" },
        { stars: "★★★★★", text: "La infraestructura es moderna y cómoda para los visitantes.", author: "Andrea Torres - Visitante, Piura" },
        { stars: "★★★★★", text: "Ancón tiene una magia especial que te hace querer volver.", author: "Ricardo Delgado - Turista, Huancayo" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % (testimonials.length / 3));
        }, 3000); // Cambio cada 3 segundos
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="about-us">
            <section className="intro">
                <h1>Sobre Nosotros</h1>
                <p>
                    En Virtual Ancón, te invitamos a descubrir el encantador distrito de Ancón a través de una
                    experiencia de turismo virtual única. Nuestra plataforma te permite explorar la rica historia, la
                    cultura vibrante y la impresionante belleza natural de Ancón desde cualquier lugar, a través de
                    recorridos interactivos y visitas guiadas en 3D.
                </p>
                <p>
                    Te invitamos a vivir Ancón como nunca antes, combinando tecnología y turismo de manera innovadora.
                </p>
            </section>

            <section className="mission-vision">
                <div className="mission">
                    <img src="mision.gif" alt="Icono de Misión" />
                    <h2>Nuestra Misión.</h2>
                    <p>
                        Nuestra misión es promover Ancón como un destino turístico atractivo y accesible. Creemos en la
                        importancia de preservar su rica historia y cultura, mientras brindamos experiencias únicas a los
                        visitantes. Desde sus playas hasta su gastronomía, Ancón ofrece un viaje inolvidable para todos.
                    </p>
                </div>
                <div className="vision">
                    <img src="vision.gif" alt="Icono de Visión" />
                    <h2>Nuestra Visión.</h2>
                    <p>
                        Convertir a Ancón en un destino turístico reconocido a nivel nacional e internacional, aprovechando
                        las tecnologías digitales para su promoción.
                    </p>
                </div>
            </section>

            <section className="testimonials">
                <h2>Testimonios de visitantes</h2>
                <div className="testimonials-container" style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial" key={index}>
                            <h3>{testimonial.stars}</h3>
                            <p>"{testimonial.text}"</p>
                            <p className="author">{testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="statistics">
                <h2>Estadísticas Clave sobre el Turismo en el Distrito de Ancón</h2>
                <div className="stats">
                    <div className="stat-item">
                        <img src="estadisticas.gif" alt="Icono de Estadísticas" />
                        <div>
                            <p className="stat-value">75%</p>
                            <p>Visitantes satisfechos con su experiencia en Ancón.</p>
                        </div>
                    </div>
                    <div className="stat-item">
                        <img src="estadisticas.gif" alt="Icono de Estadísticas" />
                        <div>
                            <p className="stat-value">80%</p>
                            <p>Recomendarían Ancón como destino turístico a otros.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="awards">
                <h2>Premios y Reconocimientos de Ancón</h2>
                <div className="awards-container">
                    <div className="award-item">
                        <img src="summum23.svg" alt="Premio Summum 2023" />
                        <p>"Reconocimiento al Desarrollo Turístico Sostenible - Premios Summum 2023"</p>
                    </div>
                    <div className="award-item">
                        <img src="Bienal de Arquitectura, Urbanismo y Artes del Perú 2016.png" alt="Bienal de Arquitectura, Urbanismo y Artes del Perú 2016" />
                        <p>"Bienal de Arquitectura, Urbanismo y Artes del Perú 2016"</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;



