export function sliderMain2(){
    if(document.querySelector("#section2-swiper")){
        var swiper = new Swiper("#section2-swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
              nextEl: "#section2-swiper-button-next"

            },
          });
}
}