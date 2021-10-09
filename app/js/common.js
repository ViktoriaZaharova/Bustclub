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

$('.btn-size').on('click', function (e) {
    e.preventDefault();
    $('.sizes-dropdown').fadeToggle();
});

// событие клика по веб-документу
$(document).mouseup(function (e) {
    var div = $(".header-dropdown");
    var btn = $('.btn-drop-header');
    if (!div.is(e.target) && !btn.is(e.target) && btn.has(e.target).length === 0 && div.has(e.target).length === 0) {
        div.fadeOut();
    }
});

// hover table
$('.table-sizes td').on('mouseenter', function() {
    var $currentTable = $(this).closest('.table-sizes');
    var index = $(this).index();
    $currentTable.find('td').removeClass('hover-td');

    $(this).prevAll('td').not('.table-sizes__col').toggleClass('hover-td');
    $currentTable.find('tr').each(function() {
        $(this).find('td').eq(index).addClass('hover-td');
    });

    $(this).parent('tr').nextAll('tr').find('td').removeClass('hover-td');
});

// password view
$('.btn-view-password').on('click', function(){
    if ($(this).siblings('.input-password').attr('type') === 'password'){
        $(this).addClass('view');
        $(this).siblings('.input-password').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $(this).siblings('.input-password').attr('type', 'password');
    }
    return false;
});

