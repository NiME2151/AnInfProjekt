// function collDetect() {
//     $('.enemy').each(function(){
//         if(recthit('.enemy', '.player')){
//             console.log("hit");
//         } else {
//             console.log("no hit");
//         }
//     });
// }

function healthDecrease() {
    oldVal = $('#health').val();
    newVal = oldVal - 10;
    $('#health').val(newVal);
    return newVal;
}


const speed = 100;
function recthit(rectone, player, direction) {
    let coll = false;
    // var r1 = $(rectone);
    var r2 = $(player);
    $(".enemy").each(function (index) {
        // console.table($(this).offset().left);

        var r1x = $(this).offset().left;
        var r1w = $(this).width() - 1;
        var r1y = $(this).offset().top;
        var r1h = $(this).height() - 1;

        var r2x = r2.offset().left;
        var r2w = r2.width() - 1;
        var r2y = r2.offset().top;
        var r2h = r2.height() - 1;

        // if (direction === 'down') {
        //     r2y += speed;
        // }
        // if (direction === 'up') {
        //     r2y -= speed;
        // }
        // if (direction === 'left') {
        //     r2x -= speed;
        // }
        // if (direction === 'right') {
        //     r2x += speed;
        // }

        if (r1y + r1h < r2y ||
            r1y > r2y + r2h ||
            r1x > r2x + r2w ||
            r1x + r1w < r2x) {
            coll = false;
        } else {
            if (healthDecrease() === 0) {
                alert("GAME OVER")
                location.reload(true);
            }
            else if ($(this).attr('id') === '66') {
                $(this).attr("class", "floor")
                healthDecrease();
            }
            else if ($(this).attr('id') === '106') {
                $(this).attr("class", "floor")
                healthDecrease();
            }
            else if ($(this).attr('id') === '87') {
                $(this).attr("class", "floor")
                healthDecrease();
            }
            coll = true;
            
        }
    });
    return coll;
}
