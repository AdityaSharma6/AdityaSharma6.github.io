import React from 'react';
import "./PersonaCard.css";
import PersonaButton, {PersonaButtonProps} from "./PersonaButton";

const trial: PersonaButtonProps = {
    pillIcon: "Aditya",
    pillName: "Sharma"
}

const PersonaCard: React.FunctionComponent = () => {
    return (
        <div className={"personaCard"}>
            <span> Picture </span>
            <PersonaButton pillIcon={trial.pillIcon} pillName={trial.pillName}/>
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

export default PersonaCard;