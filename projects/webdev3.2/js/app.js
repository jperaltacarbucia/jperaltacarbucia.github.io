$(document).foundation()

$('.content2').hide();
$('.content3').hide();
setTimeout(function() {
    $('.content2').fadeIn();
    $('.intro2').stop().animate({
        right: '0px'
    }, 800, 'swing');
}, 500);

$('a').on('mouseover', function() {
    $(this).css({
        'color': 'yellow'
    });
});
$('a').on('mouseleave', function() {
    $(this).css({
        'color': 'white'
    });
});

$('.socialBtn1, .socialBtn2, .socialBtn3').on('mouseover', function() {
    $(this).animate({
        rotate: '30deg'
    }, 500);
    $(this).animate({
        rotate: '-30deg'
    }, 500);
    $(this).stop().animate({
        rotate: '0deg'
    }, 500);
});

$('.socialBtn1, .socialBtn2, .socialBtn3').on('mouseleave', function() {
    $(this).stop().animate({
        rotate: '0deg'
    }, 500);
});

$('.logo').on('mouseover', function() {
    $(this).stop().animate({
        scale: '-=0.2'
    }, 1000);
});

$('.logo').on('mouseleave', function() {
    $(this).stop().animate({
        scale: '1'
    }, 1000);
});

$('.subButton').on('mouseover', function() {
    $(this).stop().animate({
        scale: '1.2'
    }, 1000);
});

$('.subButton').on('mouseleave', function() {
    $(this).stop().animate({
        scale: '1'
    }, 1000);
});