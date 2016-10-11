$(document).ready(function(){ 
	var touch 	= $('#touch-menu2');
	var menu2 	= $('.menu2');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu2.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu2.is(':hidden')) {
			menu2.removeAttr('style');
		}
	});
	
});