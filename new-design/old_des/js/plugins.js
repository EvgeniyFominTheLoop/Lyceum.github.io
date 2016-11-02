$(document).ready(function(){
	if($('#slider').length){
		$('#slider').nivoSlider({
			effect:'random',
			slices:15,
			animSpeed:500,
			pauseTime:3000,
			directionNav:true, //Next & Prev
			directionNavHide:true, //Only show on hover
			controlNav:true, //1,2,3...
			pauseOnHover:true, //Stop animation while hovering
			beforeChange: function(){},
			afterChange: function(){}
		});
	}
/*	$('.validat').liValidForm();*/
	//$(".test").colorbox({html:"<h3>Popover Title</h3><p>Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>"});
});