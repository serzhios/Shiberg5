export function sliderMain4(){
    if(document.querySelector("#certificato-swiper")){
        var swiper = new Swiper("#certificato-swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
              nextEl: "#next-button1",
              prevEl: "#prev-button1",

            },
          });
}
}