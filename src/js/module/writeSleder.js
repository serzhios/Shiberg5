export function writeSlider(){
    if(document.querySelector(".write-swiper-container")){
        var swiper = new Swiper(".write-swiper-container", {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            navigation: {
              nextEl: ".write-swiper-button-next",
              prevEl: ".write-swiper-button-prev",
            },
            // scrollbar: {
            //     el: ".swiper-scrollbar",
            //     hide: true,
            //   }
          });
}


}