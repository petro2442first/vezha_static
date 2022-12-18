function authorsSlider() {
  const authorsContainer = document.querySelector(".authors") ?? null;
  if (authorsContainer === null) return;

  const swiper = new Swiper(authorsContainer.querySelector(".swiper"), {
    speed: 500,
    slidesPerView: 4,
    spaceBetween: 50,
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
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1240: {
        spaceBetween: 30,
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
  const tagsMenu = document.querySelector(".tags-menu");
  tagsMenuContainer = tagsMenu.querySelector(".tags-menu__container");
  tagsMenu.style = `height: ${tagsMenuContainer.clientHeight}px`;
  const sidebar = document.querySelector(".blog__sidebar") ?? null;
  if (sidebar !== null) {
    sidebar.style = `width: ${sidebar.clientWidth}px`;
  }

  sidebar = new StickySidebar("#sticky-sidebar", {
    containerSelector: "#blog",
    topSpacing: tagsMenuContainer.clientHeight,
    bottomSpacing: 20,
  });
});

window.addEventListener("scroll", (e) => {
  const header = document.querySelector(".header");
  const tagsMenu = document.querySelector(".tags-menu");
  tagsMenuContainer = tagsMenu.querySelector(".tags-menu__container");
  if (document.documentElement.scrollTop >= header.clientHeight) {
    tagsMenuContainer.classList.add("sticky");
  } else {
    tagsMenuContainer.classList.remove("sticky");
  }
});
