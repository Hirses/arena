$(document).ready(function(){
    $('.gallery__corusel').slick({
        dots: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_arrow.svg"></button>',
    });
    $('.team__corusel').slick({
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        dots: true,
        centerPadding: '0px',
        prevArrow: '<button type="button" class="slick-prev-2"><img src="../icons/left_arrow.svg"</button>',
        nextArrow: '<button type="button" class="slick-next-2"><img src="../icons/right_arrow.svg"></button>',
        dotsClass: 'slick-dots-2',
    });
    $('.team__corusel-2').slick({
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        dots: true,
        centerPadding: '0px',
        prevArrow: '<button type="button" class="slick-prev-2"><img src="../icons/left_arrow.svg"</button>',
        nextArrow: '<button type="button" class="slick-next-2"><img src="../icons/right_arrow.svg"></button>',
        dotsClass: 'slick-dots-2',
    });
    $('ul.team__tabs').on('click', 'li:not(.team__tab_active)', function() {
        $(this)
          .addClass('team__tab_active').siblings().removeClass('team__tab_active')
          .closest('div.container').find('div.team__content').removeClass('team__content_active').eq($(this).index()).addClass('team__content_active');
    });
    $.instagramFeed({
        'username': 'arena_perm', //Имя пользователя
        'container': "#instafeed", //Контейнер для изображений
        'display_profile': false, //Отображение профиля
        'display_biography': false, //Отображение биографии
        'display_gallery': true, //Отображение галереи
        'styling': true, //Стандартные стили библиотеки
        'items': 3, //Количество изображений в галереи
        'items_per_row': 3, //Количество изображений в ряд
        'margin': 0.5 //Отступ между изображениями
    });
  });