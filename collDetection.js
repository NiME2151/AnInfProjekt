function collDetect() {
    $('.enemy').each(function(){
        if(recthit('.enemy', '.player')){
            console.log("hit");
        } else {
            console.log("no hit");
        }
    });
}

function recthit(rectone, recttwo){

    var r1 = $(rectone);
    var r2 = $(recttwo);

    var r1x = r1.offset().left;
    var r1w = r1.width();
    var r1y = r1.offset().top;
    var r1h = r1.height();

    var r2x = r2.offset().left;
    var r2w = r2.width();
    var r2y = r2.offset().top;
    var r2h = r2.height();

    if( r1y+r1h < r2y ||
        r1y > r2y+r2h ||
        r1x > r2x+r2w ||
        r1x+r1w < r2x ){
        return false;
    }else{
        return true;
    }
}
