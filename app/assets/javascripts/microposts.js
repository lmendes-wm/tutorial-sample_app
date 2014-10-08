function countdown()
{
    $("#char-countdown").removeClass("error");
    var limit = $("#micropost_content").attr("limit");
    var current_length = limit - $("#micropost_content").val().length;

    // No negative current_length
    if (current_length <= 0) {
        current_length = 0;
        $("#char-countdown").addClass("error");
    }
    $("#char-countdown").find("span").text(current_length);
}

$(function(){
    if ($("#micropost_content").length > 0) {
        $("#micropost_content").unbind("keyup").on("keyup", function(){
            countdown();
        });
        countdown();
    }
});
