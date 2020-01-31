$(document).ready(function () {

    $(document).keydown(function(e) { //ArrowDown
        if (e.which == 40) {
            $("div").animate({
                bottom: '-=25'
            }, 200, function() {
            });
        }
    });
    $(document).keydown(function(e) { //ArrowUp
        switch (e.which) {
            case 39:
                $("section div").animate({
                    bottom: '-=25'
                }, 200, function() {
                });
                break;
        }
    });
    $(document).keypress(function() { //ArrowLeft
        if (e.which == 37) {
            $("div").animate({
                left: '-=25'
            }, 200, function() {
            });
        }
    });
    $(document).keypress(function() { //ArrowRight
        if (e.which == 39) {
            $("div").animate({
                left: '-=25'
            }, 200, function() {
            });
        }
    });

    $("div").click(function (event) {
        alert($(this).attr('id'));
    })
});

