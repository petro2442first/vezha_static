"use strict";

function authorsSlider() {
  var _document$querySelect;
  const authorsContainer =
    (_document$querySelect = document.querySelector(".authors")) !== null &&
    _document$querySelect !== void 0
      ? _document$querySelect
      : null;
  if (authorsContainer === null) return;
  const swiper = new Swiper(authorsContainer.querySelector(".swiper"), {
    speed: 500,
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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
  var _document$querySelect2, _sidebar$querySelecto;
  authorsSlider();
  const tagsMenu = document.querySelector(".tags-menu");
  const tagsMenuContainer = tagsMenu.querySelector(".tags-menu__container");
  tagsMenu.style = `height: ${tagsMenuContainer.clientHeight}px`;
  const blog = document.querySelector(".blog");
  const sidebar =
    (_document$querySelect2 = document.querySelector(".blog__sidebar")) !==
      null && _document$querySelect2 !== void 0
      ? _document$querySelect2
      : null;
  const stickyWrapper =
    (_sidebar$querySelecto = sidebar.querySelector(".inner-wrapper-sticky")) !==
      null && _sidebar$querySelecto !== void 0
      ? _sidebar$querySelecto
      : null;
  if (sidebar !== null) {
    sidebar.style = `height: ${blog.clientHeight}px`;
  }
  if (stickyWrapper !== null) {
    // stickyWrapper.style = `height: `
  }
  // sidebar = new StickySidebar("#sticky-sidebar", {
  //   containerSelector: "#blog",
  //   topSpacing: tagsMenuContainer.clientHeight,
  //   bottomSpacing: 20,
  // });
  window.addEventListener("scroll", (e) => {
    const header = document.querySelector(".header");
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= header.clientHeight) {
      tagsMenuContainer.classList.add("sticky");
    } else {
      tagsMenuContainer.classList.remove("sticky");
    }
    if (stickyWrapper !== null) {
      const sidebarTop = header.clientHeight + tagsMenu.clientHeight + 47;
      const blogBottom =
        header.clientHeight + tagsMenu.clientHeight + blog.clientHeight;
      if (scrollTop >= sidebarTop) {
        stickyWrapper.classList.add("scroll");
        stickyWrapper.style = `
        
        padding-top: ${tagsMenu.clientHeight + 10}px;
        width: ${sidebar.clientWidth + 75}px;
        `;
      }
      if (scrollTop >= blogBottom - screen.availHeight) {
        stickyWrapper.classList.remove("scroll");
        stickyWrapper.style = `
        bottom: 0;
        `;
      }
      if (scrollTop <= sidebarTop) {
        stickyWrapper.classList.remove("scroll");
        stickyWrapper.style = `
        top: 0;
        `;
      }
    }
  });
});
