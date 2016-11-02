//Created by Ken

$(function(){
  var localStorageStyle = JSON.parse(localStorage.getItem('style')) || {} ; //это он лезет в твой ЛС и смотрит есть ли там что-то по ключу стайл
  if(localStorageStyle != {}){ //если нет то задаёт просто пустой объект localStorageStyle, если есть то там будет объект с ключами айдишников
    for(var el in localStorageStyle){ //потом делает обход по всем ключам (проверка на наличие класа не нужна, он не добавит такой же если есть)
      var elId = $('#'+el); //в каждой итерации делает промежуточные переменные элИД и элКласс
      var elClass = localStorageStyle[el];
      if(!elId.hasClass(elClass)){ // смотрит, если нет у этого промежуточного айдишника такого класса то добавит его
        elId.addClass(elClass);
      }
    }
  }
  // $('a[class^=bg]').on('click', function(){ 
  //   var styleClass = $(this).data('style-class');
  //   $('#menu-top')[0].className = $('#menu-top')[0].className.replace(/\bbg.*\b/g, '');
  //   $('#menu-top')[0].className = $('#menu-top')[0].className.replace(/\bthm.*\b/g, '');
  //   $('#menu-top').addClass(styleClass); 
  //   localStorageStyle['menu-top'] = styleClass;
  //   localStorage.setItem('style', JSON.stringify(localStorageStyle)); 
  // });


  $('a[class^=bg]').on('click', function(){ 
    var styleClass = $(this).data('style-class');
    $('#theme')[0].className = $('#theme')[0].className.replace(/\bbg.*\b/g, '');
    $('#theme')[0].className = $('#theme')[0].className.replace(/\bthm.*\b/g, '');
    $('#theme').addClass(styleClass); 
    localStorageStyle['theme'] = styleClass;
    localStorage.setItem('style', JSON.stringify(localStorageStyle));
  });


});