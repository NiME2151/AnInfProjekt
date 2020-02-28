$(document).ready(function () {

    // function healthDecrease() {
    //     oldVal = $('#health').val();
    //     newVal = oldVal - 10;
    //     $('#health').val(newVal);
    // }

    $('#health').click(function () {
        oldVal = $('#health').val();
        newVal = oldVal - 10;
        $('#health').val(newVal);
    });

    let speed = '100';
    $(document).keyup(function (e) {
        // ArrowDown
        if (e.which === 40) {
            if (!recthit('.wall', '.player', 'down')) {
                $(".player").animate({
                    bottom: '-=' + speed
                }, 200, function () {
                });
            }
        }

        // ArrowUp
        if (e.which === 38) {
            if (!recthit('.wall', '.player', 'up')) {
                $(".player").animate({
                    bottom: '+=' + speed
                }, 200, function () {
                });
            }
        }

        // ArrowLeft
        if (e.which === 37) {
            if (!recthit('.wall', '.player', 'left')) {
                $(".player").animate({
                    left: '-=' + speed
                }, 200, function () {
                });
            }
        }

        //ArrowRight
        if (e.which === 39) {
            if (!recthit('.wall', '.player', 'right')) {
                $(".player").animate({
                    left: '+=' + speed
                }, 200, function () {
                });
            }
        }
    });

    $("div").click(function (event) {
        alert($(this).attr('id') + "\n" + $(this).attr('class') + "\n" + $('#health').attr('value'));
    });

    // $('div').each(function () {
    //     if ($(this).hasClass('.enemy')) {
    //     }
    //     else {
    //         location.reload();
    //     }
    // });
});

