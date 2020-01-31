$(document).ready(function () {

    $('#health').click(function () {
        oldVal = $('#health').val();
        newVal = oldVal - 10;
        $('#health').val(newVal);
    });

    $(document).keydown(function (e) { //ArrowDown
        if (e.which == 40) {
            $("div").animate({
                bottom: '-=25'
            }, 200, function () {
            });
        }
    });
    $(document).keydown(function(e) { //ArrowUp
        if (e.which == 38) {
            $("div").animate({
                bottom: '+=25'
            }, 200, function() {
            });
        }
    });
    $(document).keydown(function(e) { //ArrowLeft
        if (e.which == 37) {
            $("div").animate({
                left: '-=25'
            }, 200, function () {
            });
        }
    });
    $(document).keydown(function(e) { //ArrowRight
        if (e.which == 39) {
            $("div").animate({
                left: '+=25'
            }, 200, function() {
            });
        }
    });
});

