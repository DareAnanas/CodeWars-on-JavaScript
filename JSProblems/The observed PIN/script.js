let result = document.querySelector('#result');

function getPINs(observed) {
    observed = observed.split('');
    let numpad = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        [null, '0', null]
    ];
    let digits = [];

    function findDigitIndex(numpad, digit) {
        for (let y = 0; y < numpad.length; y++) {
            for (let x = 0; x < numpad[y].length; x++) {
                if (numpad[y][x] == digit){
                    return [x, y];
                }
            }
        }
    }

    function findAdjacentDigits(numpad, x, y) {
        let result = [numpad[y][x]];
        let pairs = [[0, -1], [0, 1], [-1, 0], [1, 0]];
        for (let i of pairs) {
            if (numpad[y + i[0]] != undefined && numpad[y + i[0]][x + i[1]] != undefined) {
                result.push(numpad[y + i[0]][x + i[1]]);
            }
        }
        return result;
    }

    for (let i = 0; i < observed.length; i++) {
        let digit = observed[i];
        digits.push(findAdjacentDigits(numpad, ...findDigitIndex(numpad, digit)));
    }
    
    let placements = [];
    let elements = [];

    function createLoop(NoR) {
        if (NoR == digits.length) {
            placements.push([...elements]);
            return;
        }
        for (let i = 0; i < digits[NoR].length; i++) {
            elements[NoR] = digits[NoR][i];
            createLoop(NoR + 1);
        }
    }
    createLoop(0);

    for (let i = 0; i < placements.length; i++) {
        placements[i] = placements[i].join('');
    }

    return placements;
}

console.log(getPINs('369'));

result.innerHTML = 1;