$('#navListButton').click(function(){
    $('#navList').slideToggle(300);
});




let winH = $(window).height() * 0.8;

$(window).on('scroll', function () {
    if ($(this).scrollTop() > winH ) {
        $('#nav').addClass('bgRed');
        $('#headerImg').attr('src', 'images/colab-logo-alt.png');
    } else {
        $('#nav').removeClass('bgRed');
        $('#headerImg').attr('src', 'images/colab-logo-white.png');
    }
}).on('resize', function(){
   winH = $(this).height() * 0.8;
});
