$(document).ready(function(){
    $(".chevron").click(function() {
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 700, 'easeInOutCubic');
    });
});
