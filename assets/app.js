/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';


/************* Création de l'accordéon du FAQ *************/
const buttons = document.querySelectorAll('.button');
const button_card = document.querySelectorAll('.button-card');
const plus = document.querySelectorAll('.bi-plus-lg');

const pathname = window.location.pathname; // pourquoi la compilation ne reconnaît pas toute les pages.. 

if(window.location.pathname == "/") {

    buttons[0].onclick = function() {
        button_card[0].classList.toggle('active');
        plus[0].classList.toggle('cross');
        button_card[1].classList.remove('active');  
        button_card[2].classList.remove('active');  
        button_card[3].classList.remove('active');  
        button_card[4].classList.remove('active');  
        button_card[5].classList.remove('active');  
    }

    buttons[1].onclick = function() {
        button_card[1].classList.toggle('active');
        plus[1].classList.toggle('cross');
        button_card[0].classList.remove('active');  
        button_card[2].classList.remove('active');  
        button_card[3].classList.remove('active');  
        button_card[4].classList.remove('active');  
        button_card[5].classList.remove('active');  
    }
    buttons[2].onclick = function() {
        button_card[2].classList.toggle('active');
        plus[2].classList.toggle('cross');
        button_card[0].classList.remove('active');  
        button_card[1].classList.remove('active');  
        button_card[3].classList.remove('active');  
        button_card[4].classList.remove('active');  
        button_card[5].classList.remove('active');  
    }
    buttons[3].onclick = function() {
        button_card[3].classList.toggle('active');
        plus[3].classList.toggle('cross');
        button_card[0].classList.remove('active');  
        button_card[1].classList.remove('active');  
        button_card[2].classList.remove('active');  
        button_card[4].classList.remove('active');  
        button_card[5].classList.remove('active');  
    }
    buttons[4].onclick = function() {
        button_card[4].classList.toggle('active');
        plus[4].classList.toggle('cross');
        button_card[0].classList.remove('active');  
        button_card[1].classList.remove('active');  
        button_card[2].classList.remove('active');  
        button_card[3].classList.remove('active');  
        button_card[5].classList.remove('active');  
    }
    buttons[5].onclick = function() {
        button_card[5].classList.toggle('active');
        plus[5].classList.toggle('cross');
        button_card[0].classList.remove('active');  
        button_card[1].classList.remove('active');  
        button_card[2].classList.remove('active');  
        button_card[3].classList.remove('active');  
        button_card[4].classList.remove('active'); 
    }
}
/************* Création de l'accordéon du FAQ *************/

/************* Affichage des infos captcha au click du lien *************/
if(window.location.pathname == "/login") {
    document.querySelector('.link-captcha-info').onclick = function() {
        document.querySelector('.link-captcha-info').classList.add('active');
        document.querySelector('.captcha-info').classList.add('active');
    }
}
/************* Affichage des infos captcha au click du lien *************/