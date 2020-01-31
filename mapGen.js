let signs = {
    '#':  'wall',
    ' ': 'floor',
    'p': 'player',
    'e': 'enemy'
}

const level1 = [
    '##############',
    '#  p  #      #',
    '#     #  #####',
    '#   ###      #',
    '#            #',
    '########     #',
    '#            #',
    '#       e    #',
    '##############'
];
let counter = 0;
level1.forEach(line => {
    line.split('').forEach(sign => {
        $("section").append(`<div id="${counter}" class='${signs[sign]}'></div>`)
            /*$("section div.wall").html($("<img>").attr("src", "textures/texture_wall.png"));
            $("section div.floor").html($("<img>").attr("src", "textures/texture_floor.png"));
            $("section div.player").html($("<img>").attr("src", "textures/texture_player.png"));*/
        counter++;
    });
    $("section").append("<div class='breaker'></div>")
});
