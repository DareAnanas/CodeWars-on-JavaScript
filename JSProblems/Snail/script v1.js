let result = document.querySelector('#result');

let matrix = [[1,2,3],
              [4,5,6], 
              [7,8,9]];

Array.prototype.grab = function (x, y) {
    return this[y][x];
}

class Vector2D {
    x; y; dir; length; lengthes = []; queue = 0;
    constructor(x, y, dir, length) {
        this.x = x; this.y = y; this.dir = dir; this.length = length;
        length--;
        while (length != 0) {
            this.lengthes.push(length);
            this.lengthes.push(length);
            length--;
        }
    }

    nextLength() {
        this.length = this.lengthes[this.queue];
        this.queue++;
    }

    nextDir() {
        if (this.dir == 3) {this.dir = 0; return;}
        this.dir++;
    }
}

function splif(matrix, vector, result) {
    switch (vector.dir) {
        case 0:
            for (; vector.x < vector.length; vector.x++) {
                result.push(matrix.grab(vector.x, vector.y))
            }
            vector.x--;
            vector.y++;
            vector.nextDir();
            vector.nextLength();
            break;
        case 1:
            vector.length += vector.y;
            for (; vector.y < vector.length; vector.y++) {
                result.push(matrix.grab(vector.x, vector.y))
            }
            vector.y--;
            vector.x--;
            vector.nextDir();
            vector.nextLength();
            break;
        case 2:
            break;
        case 3: goRight(x, y, length); break;
        default:
            console.log('VYUUUUUU');
    }
}

function snail(matrix) {
    let result = [];
    let vector = new Vector2D(0, 0, 0, matrix.length);
    console.log(vector.lengthes);
    splif(matrix, vector, result);
    splif(matrix, vector, result);
    console.log(result);
}

function goRight(x, y, length) {
    console.log(x, y, length);
}


console.log('save');

console.log(snail(matrix));

result.innerHTML = 1;