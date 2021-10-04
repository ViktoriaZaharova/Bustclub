// slider
$('.main-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    appendArrows: '.main-slider-nav',
    appendDots: '.main-slider-nav'
});

$('.models-slider').slick({
    slidesToShow: 4,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$('.reviews-slider').slick({
    slidesToShow: 2,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$(window).on("load", function () {
    $(".mScrollbar").mCustomScrollbar();
});

// input change
$('.form-selection input').on('keyup', function () {
    var $this = $(this),
        val = $this.val();

    if (val.length >= 1) {
        $(this).siblings('.input-text-size').css('opacity', '1');
    } else {
        $('.input-text-size').css('opacity', '0');
    }
});

// amount
$('.down').on("click", function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click", function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$('.dropdown-filter').on('click', '.dropdown-menu-filter', function (e) {
    e.stopPropagation();
});

// slider range
$(function () {
    $(".filter__range").slider({
        min: 0,
        max: 10000,
        values: [400,1040],
        range: true,
        slide: function(event, ui){

            $('.price-range-min.value').html($(".filter__range").slider("values",0) + ' ' + '₽');
            $('.price-range-max.value').html($(".filter__range").slider("values",1) + ' ' + '₽');
        }
    });

    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('.filter__range').slider('values', 0 ) + ' ' + '₽' + '</span>');
    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('.filter__range').slider('values', 1 ) + ' ' + '₽' + '</span>');
});

// header menu
$('.btn-catalog').on('click', function (e) {
    e.preventDefault();
    $('.catalog-dropdown').fadeToggle();
});

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".header-dropdown"); // тут указываем ID элемента
    var btn = $('.btn-catalog');
    if (!div.is(e.target) // если клик был не по нашему блоку
        && !btn.is(e.target) && btn.has(e.target).length === 0
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(); // скрываем его
    }
});