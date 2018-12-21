(function () {

    //на меню

    document.querySelectorAll('.menu-item').forEach(function(item) {

        var element = $(item).attr('href');

        item.addEventListener('click', function() {
            $('html').animate({
                scrollTop: $(element).offset().top
            }, 700);
        });
    });

    //на "see all directions button"

    document.querySelector('.places .destination-button').addEventListener('click', function() {
        $('html').animate({
                scrollTop: $('#destination').offset().top
            }, 700);
    });

    document.querySelector('.places .destination-button').addEventListener('click', function() {
        $('html').animate({
                scrollTop: $('#destination').offset().top
            }, 700);
    });

    document.querySelector('.location .destination-button').addEventListener('click', function() {
        $('html').animate({
                scrollTop: $('#destination').offset().top
            }, 700);
    });
    
})();