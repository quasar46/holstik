$(document).ready(function () {
    $('.clients-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<img src='images/svg/arrow-slide.svg' class='prev' alt='prev'>",
        nextArrow: "<img src='images/svg/arrow-slide.svg' class='next' alt='next'>",
        centerMode: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    })
})

$(document).ready(function () {
    $('.tab').on('click', function () {
        $(this).children('p').slideToggle();
        $(this).toggleClass('active');
    })
})

$(document).ready(function () {
    $('.stages-slick').slick({
        mobileFirst: true,
        slidesToShow: 1,
        prevArrow: "<img src='images/svg/arrow-next-black.png' class='prev-black' alt='prev'>",
        nextArrow: "<img src='images/svg/arrow-next-black.png' class='next-black' alt='next'>",
        responsive: [{
            breakpoint: 768,
            settings: "unslick",
        }]
    })

})

$(document).ready(function () {
    $('.sizes-slick').slick({
        mobileFirst: true,
        fade: true,
        slidesToShow: 1,
        // variableWidth: true,
        prevArrow: "<img src='images/svg/arrow-slide.svg' class='prev' alt='prev'>",
        nextArrow: "<img src='images/svg/arrow-slide.svg' class='next' alt='next'>",
        responsive: [{
            breakpoint: 768,
            settings: "unslick",
        }]
    })
});

// // action
// $(document).ready(function () {
//     $(window).resize(function () {
//         $('.action__content .action-slick').not(':first-child').css('display', 'none');
//         $("#select").change(function () {
//             $('.action__content .action-slick').css('display', 'none');
//             id = $('#select option:selected').val();
//             $('#' + id).css('display', 'flex');
//         });
//     }).trigger('resize');
// });

// // action-slick
// $(document).ready(function () {
//     $('.action-slick').slick({
//         mobileFirst: true,
//         slidesToShow: 2,
//         responsive: [{
//             breakpoint: 768,
//             settings: "unslick",
//         }]
//     })
// })

// action
$(document).ready(function () {
    var params = {
        mobileFirst: true,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 768,
            settings: "unslick",
        }]
    }

    $("#select").on('click', function () {
        $('.action-slick-wrap.active .action-slick').slick('unslick')
        $('.action__content .active').removeClass('active')
        $('#' + $(this).val()).addClass('active')
        $('.action-slick-wrap.active .action-slick').slick(params)
    })

    $('.action-slick-wrap.active .action-slick').slick(params)
});

// popup
$(document).ready(function () {
    $('.city').on('click', function () {
        $('.popup').show();
    })
    $('.yes').on('click', function () {
        $('.popup').hide();
    })
})

// change city
$(document).ready(function () {
    $(function () {
        $('#changeCity').change(function () {
            city = $('#changeCity :selected').val();
            document.getElementById('city').innerHTML = city;
        })
    });
});
