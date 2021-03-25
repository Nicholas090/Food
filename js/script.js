import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal'; 


window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(()=> openModal('.modal',modalTimerId ), 322000);

tabs();
modal('[data-modal]', '.modal', modalTimerId);
timer();
cards();
calculator();
forms(modalTimerId);
slider();


});









// npx json-server db.json