$('#ajax').html('<li>COUCOU</li>');

$('#ajax').css({
    "color" : "red",
    "background-color" : "yellow"
});

setInterval(function() {
    $('#ajax').slideToggle();
}, 2000);

$('p').click(function() {
    $(this).css("color" , "red");
});


