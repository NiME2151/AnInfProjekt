let signs = {
    '#':  'wall',
    ' ': 'floor',
    'p': 'player'
}

const level1 = [
    '##############',
    '#  p  #      #',
    '#     #  #####',
    '#   ###      #',
    '#            #',
    '########     #',
    '#            #',
    '#            #',
    '##############'
];

level1.forEach(line => {


    line.split('').forEach(sign => {
        $("section").append(`<div class='${signs[sign]}'></div>`)
            $("section div.wall").html($("<img>").attr("src", "textures/texture_wall.png"));
            $("section div.floor").html($("<img>").attr("src", "textures/texture_floor.png"));
             $("section div.player").html($("<img>").attr("src", "textures/texture_player.png"));
    });
    $("section").append("<div class='breaker'></div>")
});
