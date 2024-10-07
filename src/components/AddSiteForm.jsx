// src/components/AddSiteForm.jsx
import React, { useState } from 'react';
import { uploadImage } from '../services/storageService';
import { addSite } from '../services/firestoreService';

const AddSiteForm = () => {
    const [site, setSite] = useState({ name: '', description: '' });
    const [image, setImage] = useState(null);

    const handleInputChange = (e) => {
        setSite({ ...site, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const imageURL = image ? await uploadImage(image) : null;
        await addSite({ ...site, imageURL });
        alert('¡Sitio añadido con éxito!');
        } catch (error) {
        console.error('Error al añadir el sitio: ', error);
        alert('No se pudo añadir el sitio.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre del Sitio" onChange={handleInputChange} required />
        <textarea name="description" placeholder="Descripción" onChange={handleInputChange} required />
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Añadir Sitio</button>
        </form>
    );
};

export default AddSiteForm;
