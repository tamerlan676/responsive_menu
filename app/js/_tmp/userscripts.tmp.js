"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body');
  var toggleBurger = document.querySelector('.header__burger');
  var toggleMenu = document.querySelector('.header__menu');
  toggleBurger.addEventListener('click', function (event) {
    toggleBurger.classList.toggle('active');
    toggleMenu.classList.toggle('active');
    body.classList.toggle('lock');
  });
});