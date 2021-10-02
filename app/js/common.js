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

$(window).on("load",function(){
    $(".mScrollbar").mCustomScrollbar();
});

// input change
$('.form-selection input').on('keyup',function(){
    var $this = $(this),
        val = $this.val();

    if(val.length >= 1){
        $(this).siblings('.input-text-size').css('opacity', '1');
    }else {
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
$('.up').on("click",function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$('.dropdown-filter').on('click', '.dropdown-menu-filter', function(e) {
    e.stopPropagation();
});