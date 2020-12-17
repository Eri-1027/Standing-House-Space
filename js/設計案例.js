$(document).ready(function() {
    // nav選單
    $('.Next').click(function(e) {
            $('.nav_Next_level').toggleClass("open_Next_level").slideToggle();
        })
        // nav選單end
        //伸縮欄 by 聯絡我們 start
    $('.switch').click(function(e) {
        e.preventDefault();
        $('.open').toggleClass('open_bar');
    });
    $('.close').click(function(e) {
        e.preventDefault();
        $('.open').removeClass('open_bar');
    });
    //伸縮欄 by 聯絡我們 end

    //mobile-open-start
    $('.media_nav').click(function(e) {
        e.preventDefault();
        $('.open_mobile').toggleClass('open_mobile_bar');
    })
    $('.mobile_close').click(function(e) {
            e.preventDefault();
            $('.open_mobile').removeClass('open_mobile_bar');
        })
        //mobile-open-END
    let mySwiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 3000,
        },
        effect: 'coverflow',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
    $('.top a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });
});