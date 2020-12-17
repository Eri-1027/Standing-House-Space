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
    $('.top a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });
});

const Send_out = document.querySelector(".but");
Send_out.addEventListener('click', Verify, false);

function Verify(e) {
    let Name = document.querySelector('.YouName').value;
    let Phon = document.querySelector('.YouPhon').value;
    let Address = document.querySelector('.YouAddress').value;
    let Amount = document.querySelector('.YouAmount').value;
    let nul = '';
    if (Name == nul) {
        alert('姓名不得為空')
    } else if (Phon == nul) {
        alert('電話不得為空')
    } else if (Address == nul) {
        alert('地址不得為空')
    } else if (Amount == nul) {
        alert('預算金額不得為空')
    }
}