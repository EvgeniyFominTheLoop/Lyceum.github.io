$(document).ready(function(){
var touch = $('.mobile-menu');
var menu = $('.menu');

$(touch).on('click', function(e) {
	e.preventDefault();
	$(e.target).siblings('.menu').slideToggle();
	$(".hamburger ul").toggleClass('active');
}); 

$(window).resize(function(){ 
	var w = $(window).width(); 
	if(w > 767 && menu.is(':hidden')) { 
		menu.removeAttr('style');
	} 
});
});

// СКРУГЛЕННОЕ СВЕРНУТОЕ МЕНЮ
$('#menu2').click(function(){
    $('#menu2').toggleClass('border-radius');
});