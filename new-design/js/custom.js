// ПРЕДЗАГРУЗКА СТРАНИЦЫ
$(document).ready(function(){ 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

// СЛАЙДЕР
$('.carousel').carousel();

// ВЫЕЗД ПАНЕЛИ СО СТИЛЯМИ
$('.selector-toggle').click(function(){
	$('#styleSelector').toggleClass('open');
	if (document.documentElement.clientWidth < 768) {
		$('#title').toggleClass('hidden');
	}
	else {
		return 0;
	}
});

// РАСКРЫВАЮЩИЕСЯ БЛОКИ НА МОБИЛЕ
$("#mishukov, #info, #media, #news").click(function () {
	if (document.documentElement.clientWidth < 768) {
		$('#' + this.id + '1').slideToggle();
		$('#' + this.id).toggleClass('border-bottom');
	}
	else {
		return 0;
	}
});

// ВСПЛЫВАЮЩАЯ ПОДСКАЗКА
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

// ПАНЕЛЬ СООБЩЕНИЯ
// function viewdiv(id){
// 	var el=document.getElementById(id);
// 	if(el.style.display=="block"){
// 		el.style.display="none";
// 	}
// 	else {
// 		el.style.display="block";
// 	}
// }

// ЗАПРЕТ НА ПЕРЕТАСКИВАНИЕ КАРТИНОК
$('img').on('dragstart', function(event) { event.preventDefault(); });