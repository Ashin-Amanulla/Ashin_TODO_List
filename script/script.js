
// -----------------------------------------------------------Login box----------------------------------------------//


$(document).ready(function () {
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});



// --------------------------------------------------------------login call back--------------------------------------------//

$(document).ready(() => {
    $("#button1").click(() => {
        if ($("#username").val() == "admin" && $("#pass").val() == "12345") {
            location = "todo.html";

        }
        else {
            alert("email id/password entered is wrong!");
            location.reload();

        }
    });
});


$(document).on('keypress',function(e) {
    if(e.which == 13) {
        $("#button1").click();
    }
});