$(document).ready(function () {

    $('.card-toggle').on('click', function () {
        if ($(this).find('svg').attr('data-icon') == 'chevron-down') {
            $(this).find('svg').attr('data-icon', 'chevron-up');
        } else {
            $(this).find('svg').attr('data-icon', 'chevron-down');
        };
    });

    let $btns = $('.project-area .button-group button');

    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    // Isotope positions cards before images finish downloading, so cards
    // overlap on a first (uncached) visit. Re-run the layout as each image
    // loads, and once more when the whole page has loaded.
    let $grid = $('.project-area .grid');
    if ($grid.length) {
        let relayoutTimer;
        let relayout = function () {
            clearTimeout(relayoutTimer);
            relayoutTimer = setTimeout(function () {
                if ($grid.data('isotope')) {
                    $grid.isotope('layout');
                }
            }, 50);
        };
        $grid.find('img').each(function () {
            if (!this.complete) {
                $(this).one('load error', relayout);
            }
        });
        $(window).on('load', relayout);
        relayout();
    }

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

});

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-btn").style.display = "block";
    }
    else {
        document.getElementById("scroll-btn").style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox and Opera
}

window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./serviceWorker.js');
    }
}
