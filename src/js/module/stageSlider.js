
export function stageSlider(){
    if(document.querySelectorAll('.stage-content')){
        var swiper = new Swiper(".stage-swiper", {
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
              bulletActiveClass:'swiper-pagination-active'
            },
            navigation: {
              nextEl: ".stage-next",
              prevEl: ".stage-prev",
            },
          });

}
}
