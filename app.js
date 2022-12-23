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
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1240: {
        spaceBetween: 15,
        slidesPerView: 4,
      },
      1440: {
        spaceBetween: 50,
        slidesPerView: 4,
      },
    },
  });
}
function burgerMenu() {
  var _document$querySelect2, _document$querySelect3, _document$querySelect4;
  const burger =
    (_document$querySelect2 = document.querySelector(".burger")) !== null &&
    _document$querySelect2 !== void 0
      ? _document$querySelect2
      : null;
  const menu =
    (_document$querySelect3 = document.querySelector(".nav-menu")) !== null &&
    _document$querySelect3 !== void 0
      ? _document$querySelect3
      : null;
  const closeBtn =
    (_document$querySelect4 = document.querySelector(".nav-menu__close")) !==
      null && _document$querySelect4 !== void 0
      ? _document$querySelect4
      : null;
  if (menu !== null && burger !== null && closeBtn !== null) {
    burger.addEventListener("click", (e) => {
      menu.classList.add("open");
    });
    closeBtn.addEventListener("click", (e) => {
      menu.classList.remove("open");
    });
  }
}
document.addEventListener("DOMContentLoaded", (e) => {
  var _document$querySelect5, _sidebar$querySelecto;
  authorsSlider();
  burgerMenu();
  const tagsMenu =
    document.querySelector(".tags-menu") !== null
      ? document.querySelector(".tags-menu")
      : null;
  const tagsMenuContainer =
    document.querySelector(".tags-menu__container") !== null
      ? document.querySelector(".tags-menu__container")
      : null;
  if (tagsMenu !== null && tagsMenuContainer !== null) {
    tagsMenu.style = `height: ${tagsMenuContainer.clientHeight}px`;
  }
  const blog = document.querySelector(".blog");
  const sidebar =
    (_document$querySelect5 = document.querySelector(".blog__sidebar")) !==
      null && _document$querySelect5 !== void 0
      ? _document$querySelect5
      : null;
  const stickyWrapper =
    (_sidebar$querySelecto = sidebar.querySelector(".inner-wrapper-sticky")) !==
      null && _sidebar$querySelecto !== void 0
      ? _sidebar$querySelecto
      : null;
  if (sidebar !== null && screen.availWidth > 1240) {
    sidebar.style = `height: ${blog.clientHeight}px`;
  }
  if (screen.availHeight > blog.clientHeight) {
    console.log("ok");
    stickyWrapper.classList.add("no-sticky");
    sidebar.style = ``;
  }
  window.addEventListener("scroll", (e) => {
    var _document$querySelect6;
    const header = document.querySelector(".header");
    const scrollTop = document.documentElement.scrollTop;
    if (tagsMenu !== null && tagsMenuContainer !== null) {
      if (scrollTop >= header.clientHeight) {
        tagsMenuContainer.classList.add("sticky");
      } else {
        tagsMenuContainer.classList.remove("sticky");
      }
    }
    if (
      stickyWrapper !== null &&
      screen.availWidth > 1240 &&
      screen.availHeight < blog.clientHeight
    ) {
      const sidebarTop =
        header.clientHeight + tagsMenu.clientHeight !== null
          ? tagsMenu.clientHeight
          : 0 + 47;
      const blogBottom =
        header.clientHeight + tagsMenu.clientHeight !== null
          ? tagsMenu.clientHeight
          : 0 + blog.clientHeight;
      if (scrollTop >= sidebarTop) {
        stickyWrapper.classList.add("scroll");
        stickyWrapper.style = `
        right: ${blog.offsetLeft + 20}px;
        padding-top: ${
          tagsMenu.clientHeight !== null ? tagsMenu.clientHeight : 0 + 10
        }px;
        
        `;
        // width: ${sidebar.clientWidth + 75}px;
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
    } else {
      stickyWrapper.classList.add("no-sticky");
    }
    const goTop = document.querySelector(".scroll-top");
    if (scrollTop >= screen.availHeight) {
      goTop.classList.add("show");
      goTop.addEventListener("click", (e) => {
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    } else {
      goTop.classList.remove("show");
    }
    const footer = document.querySelector(".footer");
    const leftBar =
      (_document$querySelect6 = document.querySelector(".left-bar")) !== null &&
      _document$querySelect6 !== void 0
        ? _document$querySelect6
        : null;
    console.log(scrollTop, document.body.clientHeight, footer.clientHeight);
    if (
      scrollTop >= document.body.clientHeight - footer.clientHeight - 1000 &&
      leftBar !== null
    ) {
      leftBar.classList.add("to-top");
    } else {
      leftBar.classList.remove("to-top");
    }
  });
});
