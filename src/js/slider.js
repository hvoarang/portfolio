const slides = document.querySelectorAll('.work__list-el');
const indicators = document.querySelectorAll('.work__navigation-el');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('work__list-el--is-active');
    } else {
      slide.classList.remove('work__list-el--is-active');
    }
  });

  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add('work__navigation-el--is-active');
    } else {
      indicator.classList.remove('work__navigation-el--is-active');
    }
  });

  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    showSlide(i);
  });
});

setInterval(nextSlide, 15000);

// =====================
