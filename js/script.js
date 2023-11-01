$(document).ready(function(){

    // 960px 이상일떄만 스와이퍼 설정(함수에담아서)
    media();
    function media(){
        const ww = $(window).width();
        if(ww >= 960){
            var swiper = new Swiper(".mySwiper", {
                effect: "fade",
                loop:true,
                autoplay:{
                    delay: 1500,
                    disableOnInteraction: false,
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
            });
        }else{
            
        }
    }

    // 서브메뉴버튼
    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.menu-btn span:nth-child(1),.menu-btn span:nth-child(2)').toggleClass('add');

        // 토글클래스가 같은 전제(이벤트)에 두개이상 사용되는 경우 엇갈릴 수 있는 가능성이 크다. 때문에 같은 이벤트에 토글 두개이상 사용하지 않음
        if($('.menu-btn').hasClass('active')){
            $('.menu-bar-box').addClass('active');
        }else{
            $('.menu-bar-box').removeClass('active');
        }
    });


    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        if(sct >= 200){
            $('.header-area').addClass('active')
            $('.header-logo').addClass('active')
            $('.menu-btn').addClass('on')
            $('.menu-btn span').addClass('on')
        }else{
            $('.header-area').removeClass('active')
            $('.header-logo').removeClass('active')
            $('.menu-btn').removeClass('on')
            $('.menu-btn span').removeClass('on')
        }
    });

});