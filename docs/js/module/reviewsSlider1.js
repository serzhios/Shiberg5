
export function reviewsSlider1(){
    if(document.querySelectorAll('.block-swiwer1')){

        var swiper = new Swiper('.block-swiwer1', {
            slidesPerView: 9,
            direction: getDirection(),
            loop: true,
            navigation: {
              nextEl: '.block-button-prev1',
              prevEl: '.block-button-next1',
            },
            on: {
              resize: function () {
                swiper.changeDirection(getDirection());
              },
            },
          });

          function getDirection() {
            var windowWidth = window.innerWidth;
            var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

            return direction;
          }
}

if(document.querySelector(".block-swiper")){
    var swiper = new Swiper(".block-swiper", {
        // slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".block-button-next2",
          prevEl: ".block-button-prev2",
        }
      });
}

}