// JavaScript Document

var knop = document.querySelector('.HamburgerClass')
var Menu = document.querySelector('nav:nth-of-type(2) ul');

knop.addEventListener('click', klapopen);

function klapopen() {
    knop.classList.toggle('.actief');
}