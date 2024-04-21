(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// {
//     src: '../images/gocorona.jpg',
//     title: 'goCorona',
//     copy: 'My first practic',
//   },
//   {
//     src: './images/cocktail.jpg',
//     title: 'Coctails',
//     copy: 'Team project. Used JS',
//   },
//   {
//     src: '../images/icecream.jpg',
//     title: 'IceCream',
//     copy: 'Team project. Used JS',
//   },
//   {
//     src: '../images/phonebook.jpg',
//     title: 'PhoneBook',
//     copy: 'My first React practic',
//   },
//   {
//     src: './images/webstudio.jpg',
//     title: 'WebStudio',
//     copy: 'HTML/CSS/SASS/JS',
//   },
//   {
//     src: './images/VR.jpg',
//     title: 'VR',
//     copy: 'HTML/CSS/SASS',
//   },
