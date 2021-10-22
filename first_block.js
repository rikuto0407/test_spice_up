/*top-slider*/

$('.slider').slick({
    autoplay: true,
    speed: 1000,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: '180px',
    slidesToShow: 1,
    prevArrow: '<div class="slick-prev-slider"><i class="fas fa-angle-left"></i></div>',
    nextArrow: '<div class="slick-next-slider"><i class="fas fa-angle-right"></i></div>',
    dots: true,
  });

/*calendar*/

  $('.calendar-img').slick({
    infinite: false,
    speed: 300,
    prevArrow: '<div class="slick-prev-calendar"><i class="fas fa-angle-left"></i></div>',
    nextArrow: '<div class="slick-next-calendar"><i class="fas fa-angle-right"></i></div>',
});
