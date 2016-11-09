// Предзагрузка страницы
$(document).ready(function(){ 
$(".loader_inner").fadeOut(); 
$(".loader").delay(400).fadeOut("slow"); 
});

// Всплывающая подсказка
$(function () {
$('[data-toggle="tooltip"]').tooltip()
})

// Панель сообщения
function viewdiv(id){
var el=document.getElementById(id);
if(el.style.display=="block"){
el.style.display="none";
} else {
el.style.display="block";
}
}

$('.carousel').carousel();

// ТЕКСТ НА СЛАЙДЕРЕ И ВЫЕЗД ПАНЕЛИ
$('.selector-toggle').click(function(){
    $('#styleSelector').toggleClass('open');
    $('.carousel-caption').toggleClass('hidden');
});

$("#media").click(function () {
	$("#media1").slideToggle();
	$('#media').toggleClass('border-bottom');
});

$("#info").click(function () {
	$("#info1").slideToggle();
	$('#info').toggleClass('border-bottom');
});

$("#news").click(function () {
	$("#news1").slideToggle();
	$('#news').toggleClass('border-bottom');
});

$("#mishukov").click(function () {
	$("#mishukov1").slideToggle();
	$('#mishukov').toggleClass('border-bottom');
});


