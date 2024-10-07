// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Importar archivo CSS para los estilos

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-logo">
            <h2>Virtual Ancón</h2>
            <p>Únete a nuestro boletín para estar al tanto de novedades y lanzamientos.</p>
            <div className="footer-subscribe">
                <input type="email" placeholder="Ingresa tu correo" />
                <button>Suscribirse</button>
            </div>
            </div>

            <div className="footer-links">
            <div className="footer-column">
                <h3>Columna Uno</h3>
                <a href="#!">Enlace Uno</a>
                <a href="#!">Enlace Dos</a>
                <a href="#!">Enlace Tres</a>
                <a href="#!">Enlace Cuatro</a>
                <a href="#!">Enlace Cinco</a>
            </div>
            <div className="footer-column">
                <h3>Columna Dos</h3>
                <a href="#!">Enlace Seis</a>
                <a href="#!">Enlace Siete</a>
                <a href="#!">Enlace Ocho</a>
                <a href="#!">Enlace Nueve</a>
                <a href="#!">Enlace Diez</a>
            </div>
            <div className="footer-column">
                <h3>Síguenos</h3>
                <a href="#!">Facebook</a>
                <a href="#!">Instagram</a>
                <a href="#!">Twitter</a>
                <a href="#!">LinkedIn</a>
                <a href="#!">YouTube</a>
            </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>© 2024 Virtual Ancón. Todos los derechos reservados.</p>
            <div className="footer-policy-links">
            <a href="#!">Política de Privacidad</a>
            <a href="#!">Términos de Servicio</a>
            <a href="#!">Configuración de Cookies</a>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
