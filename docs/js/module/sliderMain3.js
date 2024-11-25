export function sliderMain3(){
    if(document.querySelector("#section6-swiper")){
        var swiper = new Swiper("#section6-swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
              nextEl: "#section6-swiper-button-next",
              prevEl: "#section6-swiper-button-prev",

            },
          });
}
}