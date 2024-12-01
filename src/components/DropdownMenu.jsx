import React from "react";
import "./DropdownMenu.css"; // Estilos específicos para el menú

const DropdownMenu = ({ user, points, onLogout, onClose }) => {
    return (
        <>
            {/* Fondo gris detrás del menú */}
            <div className="dropdown-overlay" onClick={onClose} />

            {/* Contenido del menú desplegable */}
            <div className="dropdown-menu">
                <p className="dropdown-welcome">¡Hola, {user.displayName || user.email}!</p>
                <p className="dropdown-item">Ver mi perfil</p>
                <p className="dropdown-item">Mis puntos: {points}</p>
                <button className="dropdown-logout" onClick={onLogout}>
                    Cerrar sesión
                </button>
            </div>
        </>
    );
};

export default DropdownMenu;
