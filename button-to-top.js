jQuery(function() {
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        if (appear == false) {
          appear = true;
          pagetop.stop().animate({
            'right': '15px'
          }, 500);
        }
      }
      /*
       else if ($(this).scrollTop() >= 3000){
         pagetop.addClass('botton-page_top');
       }
       */
       else {
        if (appear) {
          appear = false;
          pagetop.stop().animate({
            'right': '-50px'
          }, 300);
        }
      }
    });

    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
