export function optionSlide(){
    if(document.querySelector(".option-swiper")){
        var swiper = new Swiper(".option-swiper", {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            navigation: {
              nextEl: ".option-button-next",
              prevEl: ".option-button-prev",
            },
            // scrollbar: {
            //     el: ".swiper-scrollbar",
            //     hide: true,
            //   }
          });
        }
    if(document.querySelector(".block1-swiwer")){
        var swiper = new Swiper(".block1-swiwer", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
              nextEl: ".option-block-button-prev",
              prevEl: ".option-block-button-next",
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: true,
              }
          });
}

}