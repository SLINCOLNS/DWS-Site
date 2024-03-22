$(document).ready(function(){
    $('.carousel').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 1500
    });

    $('.dot').click(function(){
        var index = $(this).index();
        $('.carousel').slick('slickGoTo', index);
    });

    $('.carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.dot').removeClass('active-dot');
        $('.dot').eq(nextSlide).addClass('active-dot');
    });

    $('.carousel').on('afterChange', function(event, slick, currentSlide){
        $('.additional-image').removeClass('active');
        $('.additional-image').eq(currentSlide).addClass('active');
        $('.text-overlay').removeClass('active'); // Убираем класс active у всех text-overlay
        $('.text-overlay').eq(currentSlide).addClass('active'); // Добавляем класс active только к текущему text-overlay
    });
});
