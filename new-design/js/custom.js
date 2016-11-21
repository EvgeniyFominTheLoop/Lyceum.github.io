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
			if (($(window).scrollTop() <= $(document).height() - $(window).height()) && ($(window).scrollTop() + 10 > $(document).height() - $(window).height())) {
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

// ПОДГРУЗКА КОНТЕНТА (INFINITE SCROLL)
(function($) {
	$(document).ready(function() {
		
		$("#content p.shown:last").nextUntil("#content p.MsoNormal:nth-child(10)").addClass("shown");

		$(window).scroll(function() {
			if (($(window).scrollTop() <= $(document).height() - $(window).height()) && ($(window).scrollTop() + 150 > $(document).height() - $(window).height())) {
				loadMoreContent();
			}
		});
	});

	function loadMoreContent() {
		$("#content p.shown:last").nextAll().slice(0, 10).addClass("shown");
	}

})(jQuery);