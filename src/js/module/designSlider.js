export function designSlider(){
    if(document.querySelector(".design-swiper-container")){
        var swiper = new Swiper(".design-swiper-container", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true,
            navigation: {
              nextEl: ".design-swiper-button-next",
              prevEl: ".design-swiper-button-prev",
            },
            // scrollbar: {
            //     el: ".swiper-scrollbar",
            //     hide: true,
            //   }
          });
}


}