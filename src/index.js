import hero from './hero.js';

import Navigation from './navigation.js';
import './style.css';

function component() {
    document.body.appendChild(Navigation());
    document.body.appendChild(hero());
}

component();
