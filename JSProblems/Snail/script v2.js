let result = document.querySelector('#result');

let matrix = [[1,2,3],
              [4,5,6], 
              [7,8,9]];

Array.prototype.grab = function (x, y, result) {
    if (this[y] === undefined || this[y][x] === null || this[y][x] === undefined) return false;
    result.push(this[y][x]);
    this[y][x] = null;
    return true;
}

class Vector2D {
    x; y; dir;
    constructor(x, y, dir) {
        this.x = x; this.y = y; this.dir = dir;
    }
    nextDir() {
        if (this.dir == 3) {this.dir = 0; return;}
        this.dir++;
    }
}

function splif(matrix, vector, result) {
    switch (vector.dir) {
        case 0:
            while (matrix.grab(vector.x, vector.y, result)) vector.x++;
            vector.x--;
            vector.y++;
            vector.nextDir()
            break;
        case 1:
            while (matrix.grab(vector.x, vector.y, result)) vector.y++;
            vector.x--;
            vector.y--;
            vector.nextDir()
            break;
        case 2:
            while (matrix.grab(vector.x, vector.y, result)) vector.x--;
            vector.x++;
            vector.y--;
            vector.nextDir();
            break;
        case 3:
            while (matrix.grab(vector.x, vector.y, result)) vector.y--;
            vector.x++;
            vector.y++;
            vector.nextDir();
            break;
    }
}

function snail(matrix) {
    let result = [];
    let previosResultLength = 0;
    let vector = new Vector2D(0, 0, 0);
    while (true) {
        splif(matrix, vector, result);
        if (result.length == previosResultLength) break;
        previosResultLength = result.length;
    }
    return result
}


console.log(snail(matrix));

result.innerHTML = 1;