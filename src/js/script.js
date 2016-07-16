$(function(){
	console.log($('header').css('height'));
	var headerHeight = $('header').height();
	console.log(headerHeight);
	var navHeight = $('nav').height();
	console.log(navHeight);
	headerHeight = $(window).height()-navHeight;
	console.log(headerHeight);

	var marginTop = (headerHeight)/2.5;
	$('header').height(headerHeight);
	$('.header-content').css('margin-top', marginTop+'px');


	$(document).on('scroll', function(){
		// console.log($(this).scrollTop());
		var scrollTop = $(this).scrollTop();
		if(scrollTop >= headerHeight){
			console.log('should add class');
			$('nav').addClass('fixed');
			$('.grid').css('top', '2em');
		} else if($('nav').hasClass('fixed')) {
			if(scrollTop < headerHeight){
				$('nav').removeClass('fixed');
				$('.grid').css('top', '0');
			}
		}
	});
});