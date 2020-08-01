import React from 'react';
import "./PersonaCard.css";

export default function PersonaCard() {

    return (
        <div className={"personaCard"}>
            <span> Picture </span>
            <span> Aditya Sharma </span>
            <span> Software Engineering & Biomedical Engineering </span>
            <span> McMaster University </span>
            <span> Toronto, Canada</span>
            <span> ... </span>
            <span>GitHub, LinkedIn, Resume</span>
            <span>Gmail, LC, </span>
        </div>
    );
}