document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const card = document.getElementById('card').value;

    const mailtoLink = `mailto:qwerty@mail.com?subject=Форма&body=Имя: ${name}%0AТелефон: ${phone}%0ACard number: ${card}`;
    window.location.href = mailtoLink;
  });
// =====================
// const slides = document.querySelectorAll('.work__list-el');
