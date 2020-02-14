$(document).ready(function () {

    $('#health').click(function () {
        oldVal = $('#health').val();
        newVal = oldVal - 10;
        $('#health').val(newVal);
    });

    let speed = '100';
    $(document).keyup(function (e) {
        collDetect();

        // ArrowDown
        if (e.which === 40) {
            if (!recthit('.enemy', '.player', 'down')) {
                $(".player").animate({
                    bottom: '-=' + speed
                }, 200, function () {
                });
            }

        }

        // ArrowUp
        if (e.which === 38) {
            if (!recthit('.enemy', '.player', 'up')) {
                $(".player").animate({
                    bottom: '+=' + speed
                }, 200, function () {
                });
            }

        }

        // ArrowLeft
        if (e.which === 37) {
            if (!recthit('.enemy', '.player', 'left')) {
                $(".player").animate({
                    left: '-=' + speed
                }, 200, function () {
                });
            }

        }

        //ArrowRight
        if (e.which === 39) {
            if (!recthit('.enemy', '.player', 'right')) {
                $(".player").animate({
                    left: '+=' + speed
                }, 200, function () {
                });
            }
        }
    });

    $("div").click(function (event) {
        alert($(this).attr('id'));
    });
});

