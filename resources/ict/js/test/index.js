$(function(){
    var mySwiper = new Swiper(".notice-slider", {
        // spaceBetween: 30,
        // centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
});

$(function(){
    $(".btn-down").on('click', function(){ 
        $(".notice-container .contents").addClass('down');
    });

     $(".full-page").on('click', function(){ 
        $(".notice-container .contents").removeClass('down');
    });
});