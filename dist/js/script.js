$(document).ready(function(){
    $('.gallery__corusel').slick({
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
        'username': 'hirs.ses', //Имя пользователя
        'container': "#instafeed", //Контейнер для изображений
        'display_profile': false, //Отображение профиля
        'display_biography': false, //Отображение биографии
        'display_gallery': true, //Отображение галереи
        'styling': true, //Стандартные стили библиотеки
        'items': 3, //Количество изображений в галереи
        'items_per_row': 3, //Количество изображений в ряд
        'margin': 0.5 //Отступ между изображениями
    });
    $('ul.price__tabs-first').on('click', 'li:not(.price__tabs-first_active)', function() {
        $(this)
          .addClass('price_tab-first_active').siblings().removeClass('price_tab-first_active')
          .closest('div.container').find('div.price__content').removeClass('price__content_active').eq($(this).index()).addClass('price__content_active');
    });
    $('ul.price__subtabs').on('click', 'li:not(.price__subtab_active)', function() {
        $(this)
          .addClass('price__subtab_active').siblings().removeClass('price__subtab_active')
          .closest('div.container').find('div.price__subcontent').removeClass('price__subcontent_active').eq($(this).index()).addClass('price__subcontent_active');
    });
    $('ul.price__subtabs-2').on('click', 'li:not(.price__subtab_active)', function() {
        $(this)
          .addClass('price__subtab_active').siblings().removeClass('price__subtab_active')
          .closest('div.container').find('div.price__subcontent-2').removeClass('price__subcontent_active').eq($(this).index()).addClass('price__subcontent_active');
    });
    $('ul.price__subtabs-3').on('click', 'li:not(.price__subtab_active)', function() {
        $(this)
          .addClass('price__subtab_active').siblings().removeClass('price__subtab_active')
          .closest('div.container').find('div.price__subcontent-3').removeClass('price__subcontent_active').eq($(this).index()).addClass('price__subcontent_active');
    });
    $('ul.price__subtabs-4').on('click', 'li:not(.price__subtab_active)', function() {
        $(this)
          .addClass('price__subtab_active').siblings().removeClass('price__subtab_active')
          .closest('div.container').find('div.price__subcontent-4').removeClass('price__subcontent_active').eq($(this).index()).addClass('price__subcontent_active');
    });
    $('ul.price__subtabs-5').on('click', 'li:not(.price__subtab_active)', function() {
        $(this)
          .addClass('price__subtab_active').siblings().removeClass('price__subtab_active')
          .closest('div.container').find('div.price__subcontent-5').removeClass('price__subcontent_active').eq($(this).index()).addClass('price__subcontent_active');
    });
  });