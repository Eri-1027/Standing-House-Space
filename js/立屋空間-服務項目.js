$(document).ready(function() {
    // nav選單
    $('.Next').click(function(e) {
            $('.nav_Next_level').toggleClass("open_Next_level").slideToggle();
        })
        // nav選單end

    ////伸縮欄 by 聯絡我們 start
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

    $(window).scroll(function(e) {
        let scrollPos = $(window).scrollTop();
        let windowHeight = $(window).outerHeight();
        $('.animated').each(function() {
            let thisPos = $(this).offset().top;
            console.log(thisPos)
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadein');
            } else if ((windowHeight + scrollPos) < thisPos) {
                $(this).removeClass('fadein');
            }
        });
    });
});