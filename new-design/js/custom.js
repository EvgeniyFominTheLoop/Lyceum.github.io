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