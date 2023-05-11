$(document).ready(function () {
    var url = "https://www.greetingsapi.com/greetings";
    var active1 = 0;
    setInterval(function () {
        $.ajax({
            dataType: 'json',
            url: url,
            success: function (data) {
                var primeira = "";
                if (active1 < data.greetings.length) {
                    primeira += data.greetings[active1];
                } else {
                    primeira += data.greetings[0];
                    active1 = -1;
                }
                active1 += 1;
                $("#intro").html(primeira);
            }
        });
    }, 1000);
});


$(function () {
    $('.close a').click(function (e) {
        e.preventDefault();
        var destination = this.href;
        $('body').fadeOut(2000, function () {
            window.location = destination;
        });
    });
    return false;
});
