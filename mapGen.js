let signs = {
    '#': 'wall',
    ' ': 'floor',
    'p': 'player',
    'e': 'enemy',
    'h': 'hpUpPotion'
}

const level1 = [
    '##############',
    '#  p  #   h  #',
    '#     #  #####',
    '#   ###      #',
    '#         e  #',
    '########     #',
    '#  e         #',
    '#       e    #',
    '##############'
];

const level2 = [
    '##############',
    '#            #',
    '#            #',
    '######       #',
    '#    #   e   #',
    '#    e       #',
    '#    #####e###',
    '#    p #  h  #',
    '##############'
];

let counter = 0;
level1.forEach(line => {
    line.split('').forEach(sign => {
        $("section").append(`<div id="${counter}" class='${signs[sign]}'></div>`)
        counter++;
    });
    $("section").append("<div class='breaker'></div>")
});

function loadMap(level) {
    level.forEach(line => {
        line.split('').forEach(sign => {
            $("section").append(`<div id="${counter}" class='${signs[sign]}'></div>`)
            counter++;
        });
        $("section").append("<div class='breaker'></div>")
    });
}
