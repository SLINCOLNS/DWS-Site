var current_page = 1;
var mouseEventInterval = 0;
var priv_page = 1;

$(document).ready(function() {
    // Установка класса dot-nav для всех точек при загрузке страницы
    $('.dotnav').addClass('dotnav');

    // Скрываем все экраны, кроме первого, при загрузке страницы
    $('.screen').not('.screen_1').hide();

    // Функция для перемещения на определенную страницу
    function goToPage(pageNum) {
        mhGotoPage(pageNum);
        $('.dotnav').removeClass('active');
        $(`#dws__nav_dot_${pageNum}`).addClass('active');
    }

    // Навигация по нажатию на пункты меню
    $('.navigation-bar ul li a').click(function(e) {
        e.preventDefault();
        var targetPage = $(this).attr('href');
        switch (targetPage) {
            case 'home.html':
                goToPage(1);
                break;
            case 'faq.html':
                goToPage(2);
                break;
            case 'https://dwswarrp.gamestores.app/':
                goToPage(3);
                break;
            default:
                break;
        }
    });

    // Навигация по точкам
    $('.dotnav').click(function() {
        var pageNum = parseInt($(this).attr('data-page'));
        goToPage(pageNum);
    });

    // Обработчик события скролла
    $(window).on('wheel', function(event) {
        if (!mouseEventInterval) {
            if (event.originalEvent.deltaY < 0) {
                // Если скроллируем вверх
                mhGotoPage(current_page - 1);
            } else if (event.originalEvent.deltaY > 0) {
                // Если скроллируем вниз
                mhGotoPage(current_page + 1);
            }
            mouseEventInterval = true;
            setTimeout(() => {
                mouseEventInterval = false;
            }, 800); // Задержка в миллисекундах для блокировки повторного срабатывания
        }
    });
});


function mhGotoPage(e) {
    if (e > 4 || e < 1 || e == current_page) return;

    $(`.dotnav`).removeClass('active');
    $(`#dws__nav_dot_${e}`).addClass('active');

    let animatePerc = 100 * (e - 1);

    $('.dws__main_screen').css('margin-top', `-${animatePerc}vh`);

    // Скрыть все экраны и показать только необходимый
    $('.screen').hide();
    $(`.screen_${e}`).show().css('opacity', '1');

    current_page = e;

    // Скрыть экран 2, если текущая страница не 2
    if (current_page != 2) {
        $('.screen_2').hide();
    } else {
        $('.screen_2').show().css('opacity', '1');
    } 
}

window.addEventListener("wheel", event => {
    //event.deltaY
    if (mouseEventInterval == 0)
    {
        let mouse_offset = event.deltaY;
        if (mouse_offset  > 0)
        {   
            mhGotoPage(current_page + 1)
        }
        else if(mouse_offset < 0)
        {
            mhGotoPage(current_page - 1)
        };
        mouseEventInterval = 1;
        setTimeout(() => {
            mouseEventInterval = 0;
        }, 500);
    }

});

$(document).ready(function() {
    $('.dotnav').click(function() {
        var pageNum = parseInt($(this).attr('data-page'));
        mhGotoPage(pageNum);
    });
});
