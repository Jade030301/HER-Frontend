// JavaScript Document

var knop = document.querySelector('.HamburgerClass');
var Menu = document.querySelector('ul:nth-of-type(2)');
var Main = document.querySelector('main');

knop.addEventListener('click', klapopen);

function klapopen() {
    Menu.classList.toggle('actief');
    Main.classList.toggle('vast');
}

document.body.scrollTop > 50
