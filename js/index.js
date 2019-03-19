
$(document).ready(function(){
/*! Fades in page on load */
  $('.intro').css('display', 'none');
  $('.intro').fadeIn(1000);
});

$(function(){
	var navbar = $('.navbar');

	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});
});
