import React from 'react';
import "./PersonaCard.css";
import PersonaButton, {PersonaButtonProps} from "./PersonaButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PersonaButtonContent: PersonaButtonProps[] = [
    {
        icon: ["fab", "github"],
        buttonText: "GitHub",
        link: "https://github.com/AdityaSharma6"
    },
    {
        icon: ["far", "file"],
        buttonText: "Resume",
        link: process.env.PUBLIC_URL + '/AdityaSharma_Resume.pdf'

    },
    {
        icon: ["fab", "linkedin"],
        buttonText: "LinkedIn",
        link: "https://www.linkedin.com/in/adityasharma6/"
    },
    {
        icon: "envelope",
        buttonText: "Email",
        link: "mailto:shara24@mcmaster.ca"
    },
    {
        icon: "code",
        buttonText: "Leetcode",
        link: "https://leetcode.com/aditya_sharma_/"
    },

];


export default function PersonaCard() {
    return (
        <div className={"personaCard"}>
            <div className={"personaPictureContainer"}>
                {/* <img className={"personaPicture"} src={process.env.PUBLIC_URL + "/Aditya.jpg"} width="275"/> */}
                <FontAwesomeIcon icon={"user-circle"} className={"personaPicture"} />
            </div>
            <div className={"personaCardContentContainer"}>
                <div className={"personaNameContainer"}>
                    <span className={"personaName"}> Aditya Sharma </span>
                </div>

                <div className={"personaLocationContainer"}>
                    <FontAwesomeIcon icon={"map-marker-alt"} />
                    <span> Toronto, Canada</span>
                </div>

                <div className={"personaEducationInstitutionContainer"}>
                    <FontAwesomeIcon icon={"university"} />
                    <span> McMaster University </span>
                </div>

                <div className={"personaEducationContainer"}>
                <FontAwesomeIcon icon={"laptop-medical"} />
                    <span> Software & Biomedical Engineering </span>
                </div>

                
                
                <div className={"personaEmploymentContainer"}>
                    <FontAwesomeIcon icon={"briefcase"} />
                    <span className={"personaEmployment"}> __ Intern at __ </span>
                    <FontAwesomeIcon icon={["fas", "coffee"]} />
                </div>

                <div className={"personaDetailsContainer"}>
                    <p> Full-Stack Development, Data Science & App Development - thats my bread and butter! </p>
                    <p> Have a work item? Reach out to me! I also freelance in Digital Marketing & Software Development.</p>
                </div>
                <div className={"personaCardButtonsContainer"}>
                    {PersonaButtonContent.map(content => (
                        <PersonaButton key={content.buttonText} icon={content.icon} buttonText={content.buttonText} link={content.link}/>
                    ))}
                </div>
            </div>
        </div>
    );
}