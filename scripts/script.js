//(function () {
 //   $("body").hide().fadeIn(1000);
//}());

$(document).ready(function () {
    $('#slider').nivoSlider();
});

$(document).ready(function () {
    $('.menu.dropdown ul li').click(function () {
        $(this).find('ul').toggle();
    });
});
