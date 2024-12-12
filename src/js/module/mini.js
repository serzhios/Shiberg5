export function Mini(){
    const buttons = document.querySelectorAll(".section6__btn");
    const swipers = document.querySelectorAll(".section6__swiper");
    // const marker = document.querySelectorAll(".section6__marker");
    // const inner = document.querySelectorAll(".inner-square");

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        // marker.forEach(btn => btn.classList.remove("active"));
        // inner.forEach(btn => btn.classList.remove("active"));
        swipers.forEach(swiper => swiper.classList.remove("active"));
        button.classList.add("active");
        // marker.classList.add("active");
        // inner.classList.add("active");
        swipers[index].classList.add("active");
      });
    });
  }