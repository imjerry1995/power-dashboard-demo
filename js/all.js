$(document).ready(function() {
	$('.menu_title h3').click(function(event) {
		$(this).addClass('active');
		$(this).parents().siblings().find('h3').removeClass('active');
		$(this).siblings('.menu_box').slideToggle(400);
		$(this).parents().siblings().find('.menu_box').slideUp(400);
	});

	$('.toggle_menu').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('active');
		$('.sidebar').toggleClass('menu_open');
	});
});