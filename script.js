
const showBtn = document.querySelector('.show-button');
const closeBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const allBtns = document.querySelectorAll('.show-button');

const showModal = (e) => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
const closeModal = (e) => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < allBtns.length; i++) {
  allBtns.forEach(btn => {
    btn.addEventListener('click', showModal);
  });
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}
