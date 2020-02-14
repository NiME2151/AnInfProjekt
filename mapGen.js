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
    '#         e  #',
    '########     #',
    '#            #',
    '#       e    #',
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
