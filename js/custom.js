$(function() {
    var html_body = $('html,body');
    // add class-remove class for menu & gallery;
    $('ul li a').click(function() {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });


    // skdslider;
    jQuery('#demo1').skdslider({
        slideSelector: '.slide',
        delay: 5000,
        animationSpeed: 1000,
        showNextPrev: true,
        showPlayButton: true,
        autoSlide: true,
        animationType: 'fading'
    });

    // back to top return;
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $('#return-to-top').fadeIn(200);

            $('.header_bg').addClass("bg_black"); // Background color change
            $('.header').addClass("header_height"); // Header height change
            $('.header .menu ul li a').addClass("mr"); // Margin change
            $('.header .logo a').addClass("lh"); // Line height change

        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow

            $('.header_bg').removeClass("bg_black");
            $('.header').removeClass("header_height");
            $('.header .menu ul li a').removeClass("mr");
            $('.header .logo a').removeClass("lh");
        }
    });

    $('#return-to-top').click(function() { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 1000);
    });

    // counter up js;
    $('.counter').counterUp({
        delay: 3,
        time: 2000
    });

    //animation scroll js
    $('.menu a').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1000);
                return false;
            }
        }
    });

    // particles js;
    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });



    // mixit up;

    $('#container').mixItUp();

    // slick slider;

    $(".full_content").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
    });



});