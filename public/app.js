function authorsSlider() {
  const authorsContainer = document.querySelector(".authors") ?? null;
  if (authorsContainer === null) return;

  const swiper = new Swiper(authorsContainer.querySelector(".swiper"), {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //   delay: 5000,
    // },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1240: {
        spaceBetween: 10,
        slidesPerView: 4,
      },
      1440: {
        spaceBetween: 50,
        slidesPerView: 4,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  authorsSlider();
});
