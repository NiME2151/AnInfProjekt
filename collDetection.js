function healthChange(change) {
    if (change === 'p') {
        $('#health').val($('#health').val() + 25);
    }
    else if (change === 'n') {
        $('#health').val($('#health').val() - 50);
    }
}

const speed = 100;
function recthit(rectone, player, direction) {
    let coll = false;
    // var r1 = $(rectone);
    var r2 = $(player);

    $.each($('.enemy'), function (index) {
        // console.table($(this).offset().left);

        var r1x = $(this).offset().left;
        var r1w = $(this).width() - 1;
        var r1y = $(this).offset().top;
        var r1h = $(this).height() - 1;

        var r2x = r2.offset().left;
        var r2w = r2.width() - 1;
        var r2y = r2.offset().top;
        var r2h = r2.height() - 1;

        if (r1y + r1h < r2y ||
            r1y > r2y + r2h ||
            r1x > r2x + r2w ||
            r1x + r1w < r2x) {
            coll = false;
        } else {
            if (healthChange() === 0) {
                alert("GAME OVER")
                location.reload(true);
            }
            else if ($(this).attr('id') === '66') {
                $(this).attr("class", "floor");
                healthChange('n');
            }
            else if ($(this).attr('id') === '106') {
                $(this).attr("class", "floor");
                healthChange('n');
            }
            else if ($(this).attr('id') === '87') {
                $(this).attr("class", "floor");
                healthChange('n');
            }
            coll = true;
            if (!$('div').hasClass('enemy')) {
                $('section').empty();
                $.getScript('collDetection.js')
                loadMap(level2);
            }
        }
    });

    $.each($('.hpUpPotion'), function (index) {

        var r1x = $(this).offset().left;
        var r1w = $(this).width() - 1;
        var r1y = $(this).offset().top;
        var r1h = $(this).height() - 1;

        var r2x = r2.offset().left;
        var r2w = r2.width() - 1;
        var r2y = r2.offset().top;
        var r2h = r2.height() - 1;

        if (r1y + r1h < r2y ||
            r1y > r2y + r2h ||
            r1x > r2x + r2w ||
            r1x + r1w < r2x) {
            coll = false;
        } else {
            if ($(this).attr('id') === '24' && $('#health').attr('value') !== '100') {
                healthChange('p');
                $(this).attr("class", "floor");
            }
            coll = true;
        }
    });

    $.each($('.wall'), function (index) {

        var r1x = $(this).offset().left;
        var r1w = $(this).width() - 1;
        var r1y = $(this).offset().top;
        var r1h = $(this).height() - 1;

        var r2x = r2.offset().left;
        var r2w = r2.width() - 1;
        var r2y = r2.offset().top;
        var r2h = r2.height() - 1;

        if (direction === 'down') {
            r2y += speed;
        }
        if (direction === 'up') {
            r2y -= speed;
        }
        if (direction === 'left') {
            r2x -= speed;
        }
        if (direction === 'right') {
            r2x += speed;
        }

        if (r1y + r1h < r2y ||
            r1y > r2y + r2h ||
            r1x > r2x + r2w ||
            r1x + r1w < r2x) {
            coll = false;
        } else {
            coll = true;
        }
    });
    return coll;
}
