jQuery = $;

/* SEARCH FULL SCREEN */
$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
});

/* ChANGE BACKGROUND COLOR QUIZ */
$(".quiz-answer").click(function() {
    $(".quiz-answer").css("background-color", "white");
    $(this).css("background-color", "#f7f7f7");
});
