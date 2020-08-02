import React from "react";
import "./PersonaButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface PersonaButtonProps {
    pillName: string,
    pillIcon: string,
}


export default function PersonaButton(props: PersonaButtonProps){
    return(
        <button>
            {props.pillIcon} + {props.pillName}
            <FontAwesomeIcon icon="coffee" />
        </button>
    );
}