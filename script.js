$(document).ready(function () {

    $("section div").keypress(function() {
        if (e.keyCode == 37) {
            $("section div").animate({
                left: '-=25'
            }, 200, function() {
            });
        }
    });

    /*
    $("section").click(function () {

        $(this).hide();
    })
    */






    level1.forEach(line => {
        line.split('').forEach(sign => {
            $("section").append(`<div class='${signs[sign]}'></div>`)
        });
        $("section").append("<div class='breaker'></div>")
    });

})

