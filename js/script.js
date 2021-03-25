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

tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
modal('[data-modal]', '.modal', modalTimerId);
timer('.timer', '2021-06-12');
cards();
calculator();
forms('form', modalTimerId);
slider({
     container: '.offer__slider',
     nextArrow:'.offer__slider-next',
     prevArrow: '.offer__slider-prev',
     totalCounter: '#total',
     currentCounter:'#current',
     field:'.offer__slider-inner',
     wrapper:'.offer__slider-wrapper',
     slide:'.offer__slide'



});


});









// npx json-server db.json