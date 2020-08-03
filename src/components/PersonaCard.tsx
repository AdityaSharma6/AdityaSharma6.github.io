import React from 'react';
import "./PersonaCard.css";
import PersonaButton, {PersonaButtonProps} from "./PersonaButton";

const PersonaButtonContent: PersonaButtonProps[] = [
    {
        icon: ["fab", "github"],
        buttonText: "GitHub"
    },
    {
        icon: ["far", "file"],
        buttonText: "Resume"
    },
    {
        icon: ["fab", "linkedin"],
        buttonText: "LinkedIn"
    },
    {
        icon: "envelope",
        buttonText: "Email"
    },
    {
        icon: "code",
        buttonText: "Leetcode"
    },

];


const PersonaCard: React.FunctionComponent = () => {
    return (
        <div className={"personaCard"}>
            <div>
                <span> Picture </span>
            </div>
            <div className={"personaCardButtonsContainer"}>
                {PersonaButtonContent.map(buttonProps => (
                    <PersonaButton icon={buttonProps.icon} buttonText={buttonProps.buttonText}/>
                ))}
            </div>
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