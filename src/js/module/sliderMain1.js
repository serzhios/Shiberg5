
export function sliderMain1(){
    if(document.querySelector("#main_swiper1")){
    var swiper = new Swiper("#main_swiper1", {
        spaceBetween: 30,
        pagination: {
          el: "#main-swiper-pagination1",
          clickable: true,
        },
      });
}
}

