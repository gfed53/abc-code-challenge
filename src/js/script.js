$(function(){
	var headerHeight,
	navHeight,
	marginTop,
	imgWidth,
	imgHeight,
	deg = -20,
	borderWidth = 1,
	imgWidthMult = 1.04,
	imgHeightMult = 0.729,
	yMult = 0.250,
	xMult = 0.11,
	scroll = $(window).scrollTop();
	// colors = ['red', 'blue', 'green', 'yellow'],
	// count = 0;
	
	function init(){
		//For Navbar
		// console.log($('header').css('height'));
		headerHeight = $('header').height();
		// console.log(headerHeight);
		navHeight = $('nav').height();
		// console.log(navHeight);
		headerHeight = $(window).height()-navHeight;
		// console.log(headerHeight);

		if($(window).width() <= 338){
			marginTop = (headerHeight)/5;
		} else {
			marginTop = (headerHeight)/4;
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
		$('.box-ends').css({'width': (imgWidth*imgWidthMult)+'px', 'height': (imgHeight*imgHeightMult)+'px', 'transform': 'translateY('+(imgWidth*yMult)+'px) translateX('+(imgWidth*xMult)+'px) rotate('+deg+'deg)' });
	}

	init();

	$(window).on('resize', function(){
		init();
	});


	$(window).on('scroll', function(){
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

		if(scrollTop > scroll){
			console.log('scrolling down');
			yMult-=0.0005;
			// xMult+=0.01;
		} else {
			console.log('scrolling-up');
			yMult+=0.0005;
			// xMult-=0.01;
		}
		$('.box-ends').css({transform: 'translateY('+(imgWidth*yMult)+'px) translateX('+(imgWidth*xMult)+'px) rotate('+deg+'deg)'});
		scroll = scrollTop;
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

function toggleBoldness(bold){
	while(bold<3){
		bold+=1;
	}

	return bold;
}

function rotate(count, array){
	if(count < array.length-1){
		count++;
	} else {
		count = 0;
	}
	return count;
}


