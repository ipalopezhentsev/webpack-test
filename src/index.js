import './style.css';
import {printMe} from './print';

function component() {
    const element = document.createElement('button');


    element.addEventListener("click", ()=>printMe());
    element.innerHTML="Click <b>me</b>";

    return element;
}

document.body.appendChild(component());
