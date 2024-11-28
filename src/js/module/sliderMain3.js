export function sliderMain3(){
    if(document.querySelectorAll(".section6__swiper")){
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