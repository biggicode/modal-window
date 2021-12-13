'use strict';

const buttons = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal');
const modalClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const closeModal = () => {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = () => {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', openModal);
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModal();
  }
});
