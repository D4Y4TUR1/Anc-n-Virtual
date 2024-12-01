import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import './AuthForm.css'; 

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Crear el usuario con email y contraseña
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user; // Usuario creado

            // Agregar el usuario a Firestore con el campo 'points' inicializado a 0
            const userRef = doc(db, 'usuarios', user.uid);
            await setDoc(userRef, {
                email: user.email,
                createdAt: new Date(),
                points: 0, // Cambiado a "points" para mantener consistencia
            });            

            // Redirigir al usuario a la página de login
            window.location.href = '/login';
        } catch (error) {
            setError('Error al registrarse. Intenta nuevamente.');
            console.error("Error al registrar al usuario: ", error);
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleRegister} className="auth-form">
                <h2>Registrarse</h2>
                {error && <div className="auth-error">{error}</div>}
                <div className="auth-input-group">
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="auth-input-group">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="auth-button">Registrarse</button>
                <p className="auth-switch">
                    ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
                </p>
            </form>
        </div>
    );
};

export default Register;
