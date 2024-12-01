import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import DropdownMenu from "./DropdownMenu"; // Importa el nuevo componente
import "./Navbar.css";
import logo from "../assets/logo.png";
import defaultAvatar from "../assets/defaultAvatar.png";

function Navbar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla si el menú está abierto
    const [user, setUser] = useState(null);
    const [points, setPoints] = useState(0);
    const navigate = useNavigate();
    const auth = getAuth();

    const normalizeText = (text) => {
        return text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(normalizeText(searchTerm));
        navigate("/visitas");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate("/login");
        } catch (error) {
            console.error("Error al cerrar sesión: ", error);
        }
    };


    // Alternar el estado del menú al hacer clic en el usuario
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Alterna entre abierto y cerrado
    };

    // Escucha los puntos en tiempo real
    const fetchUserPoints = (uid) => {
        const userRef = doc(db, "usuarios", uid);
        return onSnapshot(userRef, (doc) => {
            if (doc.exists()) {
                const updatedPoints = doc.data().points || 0;
                console.log("Puntos actualizados en tiempo real:", updatedPoints);
                setPoints(updatedPoints); // Actualiza el estado de los puntos
            } else {
                console.error("El documento del usuario no existe.");
            }
        });
    };

    useEffect(() => {
        let unsubscribe; // Variable para la escucha en tiempo real
        const authUnsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                unsubscribe = fetchUserPoints(currentUser.uid); // Escucha cambios en puntos
            } else {
                setUser(null);
                setPoints(0);
            }
        });

        return () => {
            authUnsubscribe();
            if (unsubscribe) unsubscribe(); // Detén la escucha al desmontar
        };
    }, [auth]);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <a href="/">
                        <img src={logo} alt="Virtual Ancón" className="logo-image" />
                    </a>
                </div>

                <button className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>

                <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
                    <li><a href="/visitas">Visitas</a></li>
                    <li><a href="/itinerario">Itinerario</a></li>
                    <li><a href="/galeria">Galería</a></li>
                    <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
                    <li><a href="/contactanos">Contáctanos</a></li>
                    {!user && (
                        <>
                            {/* Opciones de Login y Register */}
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Registro</Link></li>
                        </>
                    )}
                </ul>

                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={handleSearch}>Buscar</button>
                </div>

                {user && (
                    <div className="navbar-user">
                        <div
                            className="user-info"
                            onClick={toggleMenu} // Alterna el estado del menú
                        >
                            <img
                                src={user.photoURL || defaultAvatar}
                                alt="Usuario"
                                className="user-avatar"
                            />
                            <span className="user-points">{points} puntos</span>
                        </div>
                    </div>
                )}
            </nav>

            {/* Renderiza el menú desplegable como un componente independiente */}
            {isMenuOpen && (
                <DropdownMenu
                    user={user}
                    points={points}
                    onLogout={handleLogout}
                    onClose={toggleMenu} // Usa la misma función para cerrar al hacer clic
                />
            )}
        </>
    );
}

export default Navbar;
