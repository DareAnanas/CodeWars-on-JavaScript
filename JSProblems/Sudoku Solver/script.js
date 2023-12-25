let result = document.querySelector('#result');

function zerosToArrays(matrix) {
    for (let y = 0; y < matrix.length; y ++) {
        for (let x = 0; x < matrix.length; x++) {
            if (matrix[y][x] == 0) matrix[y][x] = new Array(9);
        }
    }
}

function markSquareLockPlaces(matrix, x, y, e) {
    let sqrnx = Math.ceil((x + 1) / 3);
    let sqrny = Math.ceil((y + 1) / 3);
    for (let sy = (sqrny * 3) - 3; sy < sqrny * 3; sy++) {
        for (let sx = (sqrnx * 3) - 3; sx < sqrnx * 3; sx++) {
            let se = matrix[sy][sx];
            if (!Array.isArray(se)) continue;
            matrix[sy][sx][e-1] = true;
        }
    }
}

function markVerticalLockPlaces(matrix, x, e) {
    for (let vy = 0; vy < matrix.length; vy++) {
        let ve = matrix[vy][x];
        if (!Array.isArray(ve)) continue;
        matrix[vy][x][e-1] = true;
    }
}

function markHorizontalLockPlaces(matrix, y, e) {
    for (let hx = 0; hx < matrix.length; hx++) {
        let he = matrix[y][hx];
        if (!Array.isArray(he)) continue;
        matrix[y][hx][e-1] = true;
    }
}

function markLockPlaces(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix.length; x++) {
            let e = matrix[y][x];
            if (Array.isArray(e)) continue;
            markSquareLockPlaces(matrix, x, y, e);
            markVerticalLockPlaces(matrix, x, e);
            markHorizontalLockPlaces(matrix, y, e);
        }
    }
}

function countEmptyLockPlaces(e) {
    let emptyPlaceCount = 0;
    for (let i = 0; i < e.length; i++) {
        if (e[i] == undefined) {
            emptyPlaceCount++;
        }
    }
    return emptyPlaceCount;
}

function findEmptyLockPlaceIndex(e) {
    for (let i = 0; i < e.length; i++) {
        if (e[i] == undefined) {
            return i;
        }
    }
}

function replaceWithNumberAndMarkItsLockPlaces(matrix) {
    let numberCount = 0
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix.length; x++) {
            let e = matrix[y][x];
            if (!Array.isArray(e)) {
                numberCount++;
                continue;
            }
            if (countEmptyLockPlaces(e) != 1) continue;
            matrix[y][x] = findEmptyLockPlaceIndex(e) + 1;
            e = matrix[y][x];
            markSquareLockPlaces(matrix, x, y, e);
            markVerticalLockPlaces(matrix, x, e);
            markHorizontalLockPlaces(matrix, y, e);
        }
    }
    return numberCount;
}

function sudoku(matrix) {
    zerosToArrays(matrix);

    markLockPlaces(matrix);

    while (true) {
        let numberCount = replaceWithNumberAndMarkItsLockPlaces(matrix);
        if (numberCount == matrix.length ** 2) break;
    }

    return matrix;
}

console.log(sudoku([
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]]));

result.innerHTML = 1;