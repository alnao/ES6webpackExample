import './style.css';
import getProfile from "./profile.js"
import {product} from "./catalogo"
function deaw(){
    const el = document.createElement('div');
    el.innerHTML='<h1>prova webpack '+product.title+'</h1>';
    return el;
}
function bottone(){
    const btn = document.createElement('button');
    btn.innerHTML="GET PROFILE";
    btn.onclick=getProfile
    return btn;
}
document.body.appendChild(deaw());
document.body.appendChild(bottone());
