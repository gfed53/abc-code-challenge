$(function(){
	var headerHeight,
	navHeight,
	marginTop,
	imgWidth,
	imgHeight,
	deg = -20,
	borderWidth = 1,
	line1ImgWidthMult = 1.04,
	line1ImgHeightMult = 0.729,
	line1YMult = 0.19,
	line1XMult = 0.14,
	line2ImgWidthMult = 1.04,
	line2ImgHeightMult = 0.729,
	line2YMult = 0.320,
	line2XMult = 0.09,
	scroll = $(window).scrollTop();
	
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

		// console.log(500/478.5); //width
		// console.log(175/239.8125); //height
		// console.log(35/478.5) //transY
		// console.log(71/478.5); //transX

		// $('.box-ends').css({'width': (imgWidth*imgWidthMult)+'px', 'height': (imgHeight*imgHeightMult)+'px', 'transform': 'translateY('+(imgWidth*yMult)+'px) translateX('+(imgWidth*xMult)+'px) rotate('+deg+'deg)' });

		//83.5px Y
		//61.18px X

		$('.line1').css({'width': (imgWidth*line1ImgWidthMult)+'px', 'height': (imgHeight*line1ImgHeightMult)+'px', 'transform': 'translateY('+(imgWidth*line1YMult)+'px) translateX('+(imgWidth*line1XMult)+'px) rotate('+deg+'deg)' });
		$('.line2').css({'width': (imgWidth*line2ImgWidthMult)+'px', 'height': (imgHeight*line2ImgHeightMult)+'px', 'transform': 'translateY('+(imgWidth*line2YMult)+'px) translateX('+(imgWidth*line2XMult)+'px) rotate('+deg+'deg)' });
	}

	//Execute on startup
	init();

	$(window).on('resize', function(){
		//When user changes phone/tablet orientation
		init();
	});


	$(window).on('scroll', function(){
		// console.log($(this).scrollTop());
		//Fixed navbar
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

		//Parallax scrolling for the diagonal lines
		if(scrollTop > scroll){
			line1YMult-=0.0003;
			line2YMult-=0.0003;
			line1XMult+=0.0001;
			line2XMult+=0.0001;
		} else {
			line1YMult+=0.0003;
			line2YMult+=0.0003;
			line1XMult-=0.0001;
			line2XMult-=0.0001;
		}
		$('.line1').css({transform: 'translateY('+(imgWidth*line1YMult)+'px) translateX('+(imgWidth*line1XMult)+'px) rotate('+deg+'deg)'});
		$('.line2').css({transform: 'translateY('+(imgWidth*line2YMult)+'px) translateX('+(imgWidth*line2XMult)+'px) rotate('+deg+'deg)'});
		

		//Set our current scroll position
		scroll = scrollTop;
	});

	//Smooth-scrolling snippet
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

// function toggleBoldness(bold){
// 	while(bold<3){
// 		bold+=1;
// 	}

// 	return bold;
// }

function setLines(){
	$('.line1').css({'width': (imgWidth*line1ImgWidthMult)+'px', 'height': (imgHeight*line1ImgHeightMult)+'px', 'transform': 'translateY('+(imgWidth*line1YMult)+'px) translateX('+(imgWidth*line1XMult)+'px) rotate('+deg+'deg)' });
	$('.line2').css({'width': (imgWidth*line2ImgWidthMult)+'px', 'height': (imgHeight*line2ImgHeightMult)+'px', 'transform': 'translateY('+(imgWidth*line2YMult)+'px) translateX('+(imgWidth*line2XMult)+'px) rotate('+deg+'deg)' });
}

// function rotate(count, array){
// 	if(count < array.length-1){
// 		count++;
// 	} else {
// 		count = 0;
// 	}
// 	return count;
// }


