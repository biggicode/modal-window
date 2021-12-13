'use strict';

const buttons = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal');
const modalClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
