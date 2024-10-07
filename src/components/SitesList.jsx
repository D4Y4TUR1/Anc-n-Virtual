// src/components/SitesList.jsx
import React, { useEffect, useState } from 'react';
import { getSites } from '../services/firestoreService';

const SitesList = () => {
    const [sites, setSites] = useState([]);

    useEffect(() => {
        const fetchSites = async () => {
        const sitesData = await getSites();
        setSites(sitesData);
        };
        fetchSites();
    }, []);

    return (
        <div>
        {sites.map(site => (
            <div key={site.id}>
            <h2>{site.name}</h2>
            <p>{site.description}</p>
            {site.imageURL && <img src={site.imageURL} alt={site.name} />}
            </div>
        ))}
        </div>
    );
};

export default SitesList;
