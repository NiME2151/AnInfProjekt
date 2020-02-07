$(document).ready(function () {

    collDetect();

    $('#health').click(function () {
        oldVal = $('#health').val();
        newVal = oldVal - 10;
        $('#health').val(newVal);
    });

    $(document).keydown(function (e) {
        if (collDetect()) {
            this.stop();
        }
        // ArrowDown
        if (e.which == 40) {
            $("div").animate({
                bottom: '-=100'
            }, 200, function () {
            });
        }
        // ArrowUp
        if (e.which == 38) {
            $("div").animate({
                bottom: '+=100'
            }, 200, function() {
            });
        }
        // ArrowLeft
        if (e.which == 37) {
            $("div").animate({
                left: '-=100'
            }, 200, function () {
            });
        }
        // ArrowRight
        if (e.which == 39) {
            $("div").animate({
                left: '+=100'
            }, 200, function() {
            });
        }
    });

    $("div").click(function (event) {
        alert($(this).attr('id'));
    });
});

