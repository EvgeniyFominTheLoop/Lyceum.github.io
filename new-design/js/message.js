var FORM = {};
$('#feedb-button').on('click', function(e) {
    FORM.name = $('#feedb div:nth-of-type(1) input').val();
    FORM.email = $('#feedb div:nth-of-type(2) input').val();
    FORM.phone = $('#feedb div:nth-of-type(3) input').val();
    FORM.country = $('#feedb div:nth-of-type(4) input').val();
    FORM.message = $('#feedb div:nth-of-type(5) textarea').val();
    e.preventDefault();
    $.ajax({
        cache: false,
        type: 'post',
        data: FORM,
        url: '/contact',
        success: function(data) {
            alert('Повідомлення відправлено')
        }

    });

    return false;

});