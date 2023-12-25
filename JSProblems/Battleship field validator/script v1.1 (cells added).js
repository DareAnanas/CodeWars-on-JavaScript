let result = document.querySelector('#result');

const FIELD_WIDTH = 10;
const FIELD_HEIGHT = 10;
const ships = ['patrol', 'destroyer', 'cruiser', 'battleship'];
let battleships = {
    [ships[0]]: 0,
    [ships[1]]: 0,
    [ships[2]]: 0,
    [ships[3]]: 0
};

function cell(x, y, field, isReversed = false) {
    if (isReversed) return field[x][y];
    return field[y][x];
}

function setCell(x, y, field, value, isReversed = false) {
    if (isReversed) field[x][y] = value;
    else field[y][x] = value;
}

function markAsVisitedVertical(x, start, end, field) {
    for (let i = start; i < end+1; i++){
        setCell(x, i, field, 2);
    }
}

function checkNeighborsVertical(x, start, end, field) {
    for (let i = x-1; i < x+2; i++) {
        for (let j = start-1; j < end+2; j++) {
            try {
                cell(i, j, field);
            } catch (error) {
                continue;
            }
            if (i == x) {
                let isShip = false;
                for (let i = start; i < end+1; i++){
                    if (j == i) isShip = true;
                }
                if (isShip) continue;
            }
            if (cell(i, j, field) == 1) {
                return false
            }
        }
    }
    return true;
}

function goVertical(x, y, field) {
    for (let t = 1; t < 5; t++) {
        if (cell(x, y+t, field) == 0) {
            if (checkNeighborsVertical(x, y, y+t-1, field)) {
                markAsVisitedVertical(x, y, y+t-1, field);
                battleships[ships[t-1]]++;
                return true;
            }
            return false;
        }
    }
    return false;
}

function markAsVisitedHorizontal(y, start, end, field) {
    for (let i = start; i < end+1; i++){
        field[y][i] = 2;
    }
}

function checkNeighborsHorizontal(y, start, end, field) {
    for (let i = y-1; i < y+2; i++) {
        for (let j = start-1; j < end+2; j++) {
            try {
                field[i][j];
            } catch {
                continue;
            }
            if (i == y) {
                let isShip = false;
                for (let i = start; i < end+1; i++){
                    if (j == i) isShip = true;
                }
                if (isShip) continue;
            }
            if (field[i][j] == 1) {
                return false
            }
        }
    }
    return true;
}

function goHorizontal(x, y, field) {
    for (let t = 1; t < 5; t++) {
        if (field[y][x+t] == 0) {
            if (checkNeighborsHorizontal(y, x, x+t-1, field)) {
                markAsVisitedHorizontal(y, x, x+t-1, field);
                battleships[ships[t-1]]++;
                return true;
            }
            return false;
        }
    }
    return false;
}

function validateBattlefield(field) {
    for (let y = 0; y < FIELD_HEIGHT; y++) {
        for (let x = 0; x < FIELD_WIDTH; x++) {
            if (cell(x, y, field) == 1) {
                if (cell(x, y+1, field) == 1 && field[y][x+1] == 1) {
                    return false;
                }
                if (cell(x, y+1, field) == 0 && cell(x+1, y, field) == 0) {
                    if (!goVertical(x, y, field)) {
                        return false;
                    }
                }
                else if (cell(x+1, y, field) == 0) {
                    if (!goVertical(x, y, field)) {
                        return false;
                    }
                }
                else if (cell(x, y+1, field) == 0) {
                    if (!goHorizontal(x, y, field)) {
                        return false;
                    }
                }
            }
        }
    }
    console.log(battleships);
    console.log(field);
    for (let i = 0; i < 4; i++) {
        if (battleships[ships[i]] != 4 - i) {
            return false;
        }
    }
    return true;
}


console.log(validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]));

result.innerHTML = 1;