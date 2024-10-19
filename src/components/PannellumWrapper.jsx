// src/components/PannellumWrapper.jsx
import React, { useEffect, useRef } from 'react';
import 'pannellum/build/pannellum.css';
import pannellum from 'pannellum/build/pannellum';

const PannellumWrapper = ({ image, pitch = 10, yaw = 180, hfov = 110, showControls = true }) => {
    const pannellumRef = useRef(null);

    useEffect(() => {
        if (pannellumRef.current) {
            pannellum.viewer(pannellumRef.current, {
                type: 'equirectangular',
                panorama: image,
                pitch,
                yaw,
                hfov,
                autoLoad: true,
                showZoomCtrl: showControls,
                showFullscreenCtrl: showControls,
            });
        }
    }, [image, pitch, yaw, hfov, showControls]);

    return <div ref={pannellumRef} style={{ width: '100%', height: '100%' }} />;
};

export default PannellumWrapper;
