$(document).ready(function() {
function t() {
    $(".frameSetup").click(function() {
        var t = $(this).attr("data-app-width");
        $(".frameSetup.active").removeClass("active"),
        $("#iframe").css({
            width: t
        }),
        $(this).addClass("active"),
        e()
    })
}
function i() {
    $(".dropdown-menu > li > a").click(function(t) {
        t.preventDefault(),
        $(".btn-product").text($(this).text());
        var i = $(this).attr("href");
        $("#iframe").attr({
            src: i
        })
    })
}
function e() {
    var t = $(window).width() - $("#iframe").width()
      , i = t / 2;
    $("#iframe").css({
        "margin-left": i
    })
}
t(),
i(),
e(),
$(window).resize(function() {
    e()
})
}),
$(".dropdown-menu > li").hover(function() {
$(this).addClass("preview")
}, function() {
$(this).removeClass("preview")
});