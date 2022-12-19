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

document.addEventListener("DOMContentLoaded", (e) => {
  authorsSlider();
  const tagsMenu = document.querySelector(".tags-menu");
  const tagsMenuContainer = tagsMenu.querySelector(".tags-menu__container");
  tagsMenu.style = `height: ${tagsMenuContainer.clientHeight}px`;
  const blog = document.querySelector(".blog");
  const sidebar = document.querySelector(".blog__sidebar") ?? null;
  const stickyWrapper = sidebar.querySelector(".inner-wrapper-sticky") ?? null;
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
        right: ${blog.offsetLeft - 50}px;
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
