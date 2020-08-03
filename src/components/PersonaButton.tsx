import React from "react";
import "./PersonaButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export interface PersonaButtonProps {
    icon: IconName | [IconPrefix, IconName],
    link?: string,
    buttonText: string
}


export default function PersonaButton(props: PersonaButtonProps){
    return(
        <div className={"singularPersonaButtonContainer"}>
            <button className={"personaButton"}>
                <div className={"personaFontAwesomeIconContainer"}>
                    <FontAwesomeIcon icon={props.icon} className={"personaFontAwesomeIcon"}/>
                </div>
                <div className={"personaButtonTextContainer"}>
                    <span className={"personaButtonText"}>{props.buttonText}</span>
                </div>
            </button>  
        </div>
          
    );
}