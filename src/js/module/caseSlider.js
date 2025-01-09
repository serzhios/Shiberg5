export function caseSlider(){
    if(document.querySelector(".case-swiper-container")){
        var swiper = new Swiper(".case-swiper-container", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            navigation: {
              nextEl: ".case-swiper-button-next",
              prevEl: ".case-swiper-button-prev",
            },
            // scrollbar: {
            //     el: ".swiper-scrollbar",
            //     hide: true,
            //   }
          });
}

}