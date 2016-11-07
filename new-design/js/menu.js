(function() { 

"use strict"; 

var toggles = document.querySelectorAll(".mobile-menu"); 

for (var i = toggles.length - 1; i >= 0; i--) { 
	var toggle = toggles[i]; 
	toggleHandler(toggle); 
}; 

function toggleHandler(toggle) { 
	toggle.addEventListener( "click", function(e) { 
		e.preventDefault(); 
		var burger = this.getElementsByClassName('c-hamburger'); 
			if ( burger.length > 0){ 
				(burger[0].classList.contains("is-active") === true) ? burger[0].classList.remove("is-active") : burger[0].classList.add("is-active"); 
	} 
}); 
} 

})();




$(document).ready(function(){
var touch = $('.mobile-menu');
var menu = $('.menu');
var media = $('#media1');
var info = $('#info1');
var news = $('#news1');
var mishukov = $('#mishukov1');


$(touch).on('click', function(e) {
	e.preventDefault();
	$(e.target).siblings('.menu').slideToggle();
}); 

$("#media").click(function () {
  $("#media1").slideToggle();
});

$("#info").click(function () {
  $("#info1").slideToggle();
});

$("#news").click(function () {
  $("#news1").slideToggle();
});

$("#mishukov").click(function () {
  $("#mishukov1").slideToggle();
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

$('#media').click(function(){
    $('#media').toggleClass('border-bottom');
});

$('#info').click(function(){
    $('#info').toggleClass('border-bottom');
});

$('#news').click(function(){
    $('#news').toggleClass('border-bottom');
});

$('#mishukov').click(function(){
    $('#mishukov').toggleClass('border-bottom');
});

// $('#media').click(function(){
//     $('#media1').toggleClass('hide');
//     $('#media2').toggleClass('hide');
// });