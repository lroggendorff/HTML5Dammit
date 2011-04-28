jQuery(function($) {
    var slides = $('article > header, section');
    function reset() {
        slides
        .removeClass('current')
        .hide()
        .css('float', 'left');
        slides
        .first()
        .addClass('current')
        .show();
        $('footer').show();
    }
    reset();

    function next() {
        if ($('#resources').hasClass('current')) {
            return;
        }
        $('.current')
        .hide()
        .removeClass('current')
        .next('section')
        .addClass('current')
        .show();
        $('footer').hide();
    }

    function prev() {
        if ($('#intro').hasClass('current')) {
            return;
        }
        $('.current')
        .hide()
        .removeClass('current')
        .prev()
        .addClass('current')
        .show();
    }

    $('.reset').click(function(e) {
        e.preventDefault();
        reset();
    });

    $('.next').click(function(e) {
        e.preventDefault();
        next();
    });

    $('.prev').click(function(e) {
        e.preventDefault();
        prev();
    });

    $(window).keyup(function(e) {
        switch (e.which) {
        case 37:
            prev();
            break;
        case 39:
            next();
            break;
        case 38:
            reset();
            break;
        default:
            return;
        }
    });
});
