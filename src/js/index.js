// ============== navBar ============

window.onload = function () {
  const nav = document.querySelector('.nav');

  setTimeout(() => {
    nav.style.transform = 'translateY(0)';
  }, 500);
};
// ============== END navBar ============

// ============== Persona ============
window.addEventListener('scroll', function () {
  const img = document.querySelector('.persona__img');
  const positionFromTop = img.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  // Если верхняя граница изображения становится видимой
  if (positionFromTop - screenHeight < 0) {
    img.classList.add('active');
  }
});

window.addEventListener('scroll', function () {
  const blurb = document.querySelector('.persona__content-blurb');
  const positionFromTop = blurb.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  // Если верхняя граница блока становится видимой
  if (positionFromTop - screenHeight < 0) {
    blurb.classList.add('active');
  }
});
// ============== End Persona ============

// ============== App Design ============
window.addEventListener('scroll', function () {
  const content = document.querySelector('.app__design--content');
  const positionFromTop = content.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  // Если верхняя граница блока становится видимой
  if (positionFromTop - screenHeight < 0) {
    content.classList.add('active');
  }
});

window.addEventListener('scroll', function () {
  const img = document.querySelector('.app__design--img');
  const positionFromTop = img.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  // Если верхняя граница блока становится видимой
  if (positionFromTop - screenHeight < 0) {
    img.classList.add('active');
  }
});
// ============== End App Design ============

// ============== Web Design ============
window.addEventListener('scroll', function () {
  const content = document.querySelector('.web-design__content');
  const imgLaptop = document.querySelector('.web__design--img');
  const positionFromTop = content.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  // Если верхняя граница блока становится видимой
  if (positionFromTop - screenHeight < 0) {
    content.classList.add('active');
    imgLaptop.classList.add('active');
  }
});
// ============== End Web Design ============

// ============== BLOG ================
window.addEventListener('scroll', function () {
  const posts = document.querySelectorAll('.blog__post');
  const viewMore = document.querySelector('.blog__view-more');
  const screenHeight = window.innerHeight;

  posts.forEach(function (post, index) {
    const positionFromTop = post.getBoundingClientRect().top;

    // Если верхняя граница элемента становится видимой
    if (positionFromTop - screenHeight < 0) {
      setTimeout(function () {
        post.style.opacity = '1';
        post.style.transform = 'translateX(0)';
      }, index * 200); // Постепенное появление с задержкой
    }
  });

  const positionFromTop = viewMore.getBoundingClientRect().top;
  if (positionFromTop - screenHeight < 0) {
    viewMore.style.opacity = '1';
    viewMore.style.transform = 'translateX(0)';
  }
});

// ============== End BLOG ============
