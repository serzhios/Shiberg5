
const imagePaths = ['BL2.jpg', 'BL2.jpg', 'BL2.jpg', 'BL2.jpg'];
let currentImageIndex = 0;




export function sliderMain2(){
    if(document.querySelector(".section2-block__right")){
        var swiper = new Swiper(".section2-block__right", {
            slidesPerView: 1,
            // spaceBetween: 30,
            effect: 'fade',
            allowTouchMove: false,
            loop: true,
            navigation: {
              nextEl: "#section2-swiper-button-next"

            },

          });


}

}

