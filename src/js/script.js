$(function(){
	var headerHeight,
	navHeight,
	marginTop,
	imgWidth,
	imgHeight
	
	function init(){
		//For Navbar
		// console.log($('header').css('height'));
		headerHeight = $('header').height();
		console.log(headerHeight);
		navHeight = $('nav').height();
		console.log(navHeight);
		headerHeight = $(window).height()-navHeight;
		console.log(headerHeight);

		if($(window).width() <= 338){
			marginTop = (headerHeight)/5;
		} else {
			marginTop = (headerHeight)/3;
		}

		$('header').height(headerHeight);
		$('.header-content').css('margin-top', marginTop+'px');

		//For Lines
		// console.log($('img').width());
		// console.log($('img').height());
		imgWidth = $('img').width();
		imgHeight = $('img').height();
		// Image
		// width: 478.5px;
		// height: 239.8125px;

		// Box
		    // width: 500px;
		    // height: 175px;
		// console.log(500/478.5); //width
		// console.log(175/239.8125); //height
		// console.log(35/478.5) //transY
		// console.log(71/478.5); //transX
		$('.box-ends').css({'width': (imgWidth*1.04)+'px', 'height': (imgHeight*0.729)+'px', 'transform': 'translateY('+(imgWidth*0.250)+'px) translateX('+(imgWidth*0.11)+'px) rotate(-20deg)' });
	}

	init();

	$(window).on('resize', function(){
		init();
	});


	$(document).on('scroll', function(){
		// console.log($(this).scrollTop());
		var scrollTop = $(this).scrollTop();
		if(scrollTop >= headerHeight){
			$('nav').addClass('fixed');
			$('.grid').css('top', '2em');
		} else if($('nav').hasClass('fixed')) {
			if(scrollTop < headerHeight){
				$('nav').removeClass('fixed');
				$('.grid').css('top', '0');
			}
		}
	});

	$('.scroll-arrow').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

});


