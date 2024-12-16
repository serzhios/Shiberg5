export function Mini() {
  if (document.querySelectorAll(".section6__swiper")) {
    const buttons = document.querySelectorAll(".section6__btn");
    const swipers = document.querySelectorAll(".section6__swiper");

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        swipers.forEach(swiper => swiper.classList.remove("active"));
        button.classList.add("active");
        swipers[index].classList.add("active");
      });
    });


    var swiper = new Swiper(".section6__swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev",

      },
    });
  }





}