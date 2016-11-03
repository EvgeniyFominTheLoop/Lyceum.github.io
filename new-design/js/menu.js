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

$(touch).on('click', function(e) {
	e.preventDefault();
	$(e.target).siblings('.menu').slideToggle();
}); 

$(window).resize(function(){ 
	var w = $(window).width(); 
	if(w > 767 && menu.is(':hidden')) { 
		menu.removeAttr('style'); 
} 
}); 

});

$('#menu2').click(function(){
    $('#menu2').toggleClass('border-bottom');
});

$('#media').click(function(){
    $('#media1').toggleClass('hide');
    $('#media2').toggleClass('hide');
});




// $('.menu2').affix()
// $('data-spy=«affix» data-offset-top=«185» id=«affix»').each(function(){
// $(this).affix(‘refresh’)
// });



// $(function(){
//     $('.menu2').affix();
// })



// $(window).on('scroll', function(e){
// 	if ( $(e.target).scrollTop() > 500){
// 		$('.menu2').addClass('menu2-fixed');
// 	} else{		
// 		$('.menu2').removeClass('menu2-fixed');
// 	}
// })

// });


// $('#myAffix').affix({
//   offset: {
//     top: 100,
//     bottom: function () {
//       return (this.bottom = $('.footer').outerHeight(true))
//     }
//   }
// })

// $(document).ready(function(){
// $(".menu2").affix({
// offset: {
// top: 500
// }
// });
// });