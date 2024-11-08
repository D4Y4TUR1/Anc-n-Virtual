// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Importar archivo CSS para los estilos
import logo from '../assets/logo.png';


function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-logo">
            <div className="navbar-logo">
                <a href="/">
                    <img src={logo} alt="Virtual Ancón" className="logo-image" />
                </a>
            </div>
            <p>Únete a nuestro boletín para estar al tanto de novedades y lanzamientos.</p>
            <div className="footer-subscribe">
                <input type="email" placeholder="Ingresa tu correo" />
                <button>Suscribirse</button>
            </div>
            </div>

            <div className="footer-links">
            <div className="footer-column">
                <h3>Acerca de</h3>
                <a href="#!">Equipo</a>
                <a href="#!">Servicios</a>
                <a href="#!">Accede a tu cuenta</a>
                <a href="#!">Autores</a>
            </div>
            <div className="footer-column">
                <h3>Información</h3>
                <a href="#!">Preguntas</a>
                <a href="#!">Politica de Privacidad</a>
                <a href="#!">Términos de Servicio</a>
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
