export function catalogSlider(){
    if(document.querySelector(".block-swiwer")){
        var swiper = new Swiper(".block-swiwer", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
              nextEl: ".block-button-next",
              prevEl: ".block-button-prev",
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: true,
              }
          });
}

}