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
});

// РАСКРЫВАЮЩИЕСЯ БЛОКИ НА МОБИЛЕ
$("#mishukov, #info, #media, #news").click(function () {
	if (document.documentElement.clientWidth < 768) {
		$('#' + this.id + '1').slideToggle();
		// $('#' + this.id).toggleClass('border-bottom');
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

// LIGHT GALLERY
$(document).ready(function() {
$("#lightgallery").lightGallery(); 
});

// КОЛОНКИ В ГАЛЕРЕЕ
if(window.location.href.indexOf("gallery") > -1) {
	var g = document.getElementById("gallery");
	g.className += "columns";
}

// ПОДГРУЗКА КОНТЕНТА


// ПЛАВНАЯ ПРОКРУТКА ВВЕРХ
$(document).ready(function () {
    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
			if($(window).scrollTop() + $(window).height() == $(document).height()) {
				$('#back-top').addClass('btn-bottom');
			} else {
				$('#back-top').removeClass('btn-bottom');
			}
        });
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});