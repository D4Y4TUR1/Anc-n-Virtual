// src/components/ContactUs.jsx
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <section className="contact-header">
                <h1>Contáctanos</h1>
                <p>Compartir historias del Balneario de Ancón enriquece nuestra comunidad y celebra nuestras experiencias únicas.</p>
            </section>

            <section className="contact-info-section">
                <div className="contact-info">
                    <h3>Conexiones</h3>
                    <h2>Contáctanos</h2>
                    <p>Descubre las maravillas de Ancón y comparte tus experiencias con nosotros.</p>
                    <div className="contact-details">
                        <p><strong>Correo:</strong> hola@virtualancon.pe</p>
                        <p><strong>Teléfono:</strong> +51 (1) 234-5678</p>
                        <p><strong>Oficina:</strong> Av. Ancón 123, Ancón, Lima, Perú</p>
                    </div>
                </div>

                {/* Contenedor de formulario e imagen para que se alineen en fila */}
                <div className="contact-form-container">
                    <div className="contact-form">
                        <h3>Bienvenido</h3>
                        <h2>Contáctanos</h2>
                        <p>Estamos aquí para escuchar tus propuestas y anécdotas.</p>
                        <form>
                            <label>Nombre</label>
                            <input type="text" placeholder="Tu nombre" required />

                            <label>Correo</label>
                            <input type="email" placeholder="Tu correo electrónico" required />

                            <label>Mensaje</label>
                            <textarea placeholder="Escribe tu mensaje..." required></textarea>

                            <div className="terms">
                                <input type="checkbox" required />
                                <label>Acepto los Términos</label>
                            </div>

                            <button type="submit">Enviar</button>
                        </form>
                    </div>

                    {/* Imagen a la derecha del formulario */}
                    <div className="contact-image">
                        <img src="Placeholder Image.png" alt="Atención 24/7" />
                    </div>
                </div>
            </section>

            <section className="experience-share">
                <h2>Comparte tu experiencia en Ancón</h2>
                <p>Nos encantaría conocer tus historias y propuestas sobre el hermoso Balneario de Ancón.</p>
                <div className="experience-buttons">
                    <button>Enviar</button>
                    <button>Contribuir</button>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;

