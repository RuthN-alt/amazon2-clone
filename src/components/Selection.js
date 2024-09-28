// src/components/Selection.js
import React from 'react';
import './Selection.css';
import { useNavigate } from 'react-router-dom';

const Selection = ({ id, title, image, route }) => {
    const navigate = useNavigate();

    const goToRoute = () => {
        navigate(route);
    };

    return (
        <div className="selection" onClick={goToRoute}>
            <img src={image} alt={title} />
            <div className="selection__info">
                <h2>{title}</h2>
                <p>Show full collection</p>
            </div>
        </div>
    );
};

export default Selection;
