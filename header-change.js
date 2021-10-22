$(function() {
	$(window).on('load scroll', function() {
		var scrollPos = $(this).scrollTop();
		if ( scrollPos > 400 ) {
			$('img.header-logo-size').addClass('header-logo-animation-a');
			$('div.message').addClass('message-hidden');
		} else {
            $('img.header-logo-size').removeClass('header-logo-animation-a');
			$('div.message').removeClass('message-hidden');
		}
	});
});
