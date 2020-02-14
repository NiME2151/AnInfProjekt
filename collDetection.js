function collDetect() {
    $('.enemy').each(function(){
        if(recthit('.enemy', '.player')){
            console.log("hit");
            return true;
        } else {
            console.log("no hit");
            return false;
        }
    });
}

const speed = 100;
function recthit(rectone, player, direction){

    var r1 = $(rectone);
    var r2 = $(player);

    var r1x = r1.offset().left;
    var r1w = r1.width()-1;
    var r1y = r1.offset().top;
    var r1h = r1.height()-1;

    var r2x = r2.offset().left;
    var r2w = r2.width()-1;
    var r2y = r2.offset().top;
    var r2h = r2.height()-1;

    if(direction === 'down') {
        r2y+=speed;
    }
    if (direction === 'up') {
        r2y-=speed;
    }
    if (direction === 'left') {
        r2x-=speed;
    }
    if (direction === 'right') {
        r2x+=speed;
    }

    if( r1y+r1h < r2y ||
        r1y > r2y+r2h ||
        r1x > r2x+r2w ||
        r1x+r1w < r2x ){
        return false;
    }else{
        return true;
    }
}
