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

    const map = [
        '###########',
        '#         #',
        '#         #',
        '#         #',
        '#         #',
        '###########'
    ];

    let signs = {
        '#':  'wall',
        ' ': 'floor'
    }


    map.forEach(line => {
        line.split('').forEach(sign => {
            $("section").append(`<div class='${signs[sign]}'></div>`)
        });
    });

})

