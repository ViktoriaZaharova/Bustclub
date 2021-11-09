// slider
$('.main-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    appendArrows: '.main-slider-nav',
    appendDots: '.main-slider-nav'
});


$('.reviews-slider').slick({
    slidesToShow: 2,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: true,
                appendDots: '.reviews-slider__nav',
                appendArrows: '.reviews-slider__nav'
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                appendDots: '.reviews-slider__nav',
                appendArrows: '.reviews-slider__nav'
            }
        }
    ]
});

$('.gallery-product-preview').slick({
    slidesToShow: 5,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    asNavFor: '.gallery-product-max',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768.5,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
                variableWidth: true,
                infinite: false,
            }
        }
    ]
});

$('.gallery-product-max').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
        }
    ]
});


// $('.mobile-filter-sizes-slider-left').slick({
//     slidesToShow: 5,
//     slidesToScroll: 5,
//     vertical: true,
//     verticalSwiping: true,
//     verticalScrolling: true,
//     centerMode: true,
//     centerPadding: '0',
//     infinite: true,
//     arrows: false,
//     dots: false
// });
//
//
// $('.mobile-filter-sizes-slider-right').slick({
//     slidesToShow: 5,
//     slidesToScroll: 5,
//     vertical: true,
//     verticalSwiping: true,
//     verticalScrolling: true,
//     centerMode: true,
//     centerPadding: '0',
//     infinite: true,
//     arrows: false,
//     dots: false
// });

// slick active
$(window).on('load resize', function () {
    if ($(window).width() > 900) {
        $('.models-slider:not(.slick-initialized)').slick({
            slidesToShow: 4,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        });

        $(".scroll-box-mobile").mCustomScrollbar('destroy');
    } else {
        $(".models-slider.slick-initialized").slick("unslick");
        $(".scroll-box-mobile").mCustomScrollbar({
            axis: "x"
        });
    }

    if ($(window).width() > 735) {
        $(".similar-products-scroll").mCustomScrollbar('destroy');
    } else {
        $(".similar-products-scroll").mCustomScrollbar({
            axis: "x"
        });
    }


    if ($(window).width() > 768) {
        $('.recommended-slider:not(.slick-initialized)').slick({
            slidesToShow: 4,
            infinite: false,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]

        });

        $(".scroll-box-about").mCustomScrollbar('destroy');

    } else {
        $(".recommended-slider.slick-initialized").slick("unslick");
        $(".scroll-box-about").mCustomScrollbar({
            axis: "x"
        });

    }


});
// slick active

$(window).on("load", function () {
    $(".mScrollbar").mCustomScrollbar();
    $(".table-mScrollbar").mCustomScrollbar({
        axis: "x"
    });


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
    $(".filter__range1").slider({
        min: 0,
        max: 10000,
        values: [400, 1040],
        range: true,
        slide: function (event, ui) {

            $('.filter__range1').find('.price-range-min.value').html($(".filter__range1").slider("values", 0) + ' ' + '₽');
            $('.filter__range1').find('.price-range-max.value').html($(".filter__range1").slider("values", 1) + ' ' + '₽');
        }
    });

    $('.filter__range1').find('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('.filter__range1').slider('values', 0) + ' ' + '₽' + '</span>');
    $('.filter__range1').find('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('.filter__range1').slider('values', 1) + ' ' + '₽' + '</span>');
});


$(function () {
    $(".filter__range2").slider({
        min: 0,
        max: 10000,
        values: [400, 1040],
        range: true,
        slide: function (event, ui) {

            $('.filter__range2').find('.price-range-min.value').html($(".filter__range2").slider("values", 0) + ' ' + '₽');
            $('.filter__range2').find('.price-range-max.value').html($(".filter__range2").slider("values", 1) + ' ' + '₽');
        }
    });

    $('.filter__range2').find('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('.filter__range2').slider('values', 0) + ' ' + '₽' + '</span>');
    $('.filter__range2').find('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('.filter__range2').slider('values', 1) + ' ' + '₽' + '</span>');
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
$('.table-sizes-header td').on('mouseenter', function () {
    var $currentTable = $(this).closest('.table-sizes-header');
    var index = $(this).index();
    $currentTable.find('td').removeClass('hover-td');

    $(this).prevAll('td').not('.table-sizes__col').toggleClass('hover-td');
    $currentTable.find('tr').each(function () {
        $(this).find('td').eq(index).addClass('hover-td');
    });

    $(this).parent('tr').nextAll('tr').find('td').removeClass('hover-td');
});

// password view
$('.btn-view-password').on('click', function () {
    if ($(this).siblings('.input-password').attr('type') === 'password') {
        $(this).addClass('view');
        $(this).siblings('.input-password').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $(this).siblings('.input-password').attr('type', 'password');
    }
    return false;
});


$("[data-toggle=tooltip]").tooltip({boundary: 'window'});

$('.color-product-preview__item').on('click', function () {
    $('.color-product-preview__item').removeClass('active');
    $(this).addClass('active');
});

$('.menu-mobile-wrapper .dropdown-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('click').siblings('.dropdown-menu-mobile').slideToggle();
});

// mobile menu
$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
    $('body').toggleClass('no-scroll');
});

$('.btn-close-menu').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
    $('body').removeClass('no-scroll');
});

$('.links-toggle').on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parent().find('.box-content-hidden');


    if (!$this.hasClass('trigger')) {
        $this.addClass('trigger');
        $this.html('Скрыть');

        content.addClass('open');
    } else {
        $this.removeClass('trigger');
        $this.html('Развернуть');

        content.removeClass('open');
    }
});

// filter mobile
$('.form-filter-mobile__category__links-dropdown').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.form-filter-mobile__category-submenu').css('right', '0');
});

$('.btn-filter-prev').on('click', function () {
    $(this).parents('.form-filter-mobile__category-submenu').css('right', '-100%');
});

$('.btn-filter').on('click', function (e) {
    e.preventDefault();
    $('.filter-mobile').fadeIn();
});

$('.btn-filter-close__mob').on('click', function (e) {
    e.preventDefault();
    $('.filter-mobile').fadeOut();
});


// активная ссылка меню
$('.cabinet-menu li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

// mobile cabinet menu
$('.btn-cabinet-menu').on('click', function (e) {
    e.preventDefault();
    $('.cabinet-page-menu').css('display', 'flex');
    $('.cabinet-page-content').css('display', 'none');
});

// sidebar
$('.sidebar-category-dropdown').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.sidebar-menu').toggleClass('open');
});


// input radio
$('.checkbox-size__input').click(function() {
    var text = $(this).val();
    $(this).parents('.product-size').find('.dropdown-toggle .btn-select__text').text(text);
});
