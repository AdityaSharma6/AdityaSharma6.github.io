import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faEnvelope, faCode, faMapMarkerAlt, faUniversity, faLaptopMedical, faBriefcase, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faFile} from "@fortawesome/free-regular-svg-icons"

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

library.add(faCoffee, faFile, faGithub, faLinkedin, faEnvelope, faCode, faMapMarkerAlt, faUniversity, faLaptopMedical, faBriefcase, faGoogle, faUserCircle)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
