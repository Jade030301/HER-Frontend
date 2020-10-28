// JavaScript Document

var knop = document.querySelector('.HamburgerClass');
var Menu = document.querySelector('header div:first-of-type');
var Main = document.querySelector('main');

knop.addEventListener('click', klapopen);

function klapopen() {
    Menu.classList.toggle('actief');
    Main.classList.toggle('vast');
}

var knopje = document.querySelector('.Vergrootglas');
var inhoud = document.querySelector('header nav div:nth-of-type(2)');

knopje.addEventListener('click', zichtbaar);

function zichtbaar() {
    inhoud.classList.add('Open');
    Main.classList.add('vast');
}

var kruisje = document.querySelector('header nav div:nth-of-type(2) ul li:nth-of-type(3)');

kruisje.addEventListener('click', onzichtbaar);

function onzichtbaar() {
    inhoud.classList.remove('Open');
    Main.classList.remove('vast');
}
