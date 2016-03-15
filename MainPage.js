$(document).ready(function(){

	var scroll1;
	$(window).scroll(function(){
		scroll1 = $(window).scrollTop();

			if(scroll1 > 550){
				$('.poster').animate({'opacity':'1'});
		}

	});

});
