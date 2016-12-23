$(function() {

	// --- animations ---
		
	$('.container').hide();
	$('.container').fadeIn(4000);

	$('h1').hide();
	$('h1').fadeIn(5000);

	$('.container').on('click', function() {

 
		var dataNext = $(this).attr('data-next');

		if (typeof dataNext !== typeof undefined && dataNext !== false) {
			var $next = $('.' + dataNext);
			$('html, body').animate({
	        scrollTop: 	$next.offset().top
	    	}, 4000);
	    }
	});

});