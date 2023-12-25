let result = document.querySelector('#result');

const RIGHT = 0;
const DOWN = 1;
const LEFT = 2;
const UP = 3;

class Vector {
    constructor(x, y, dir) { // x: zero-index; y: zero-index; dir: RIGHT, DOWN, LEFT, UP;
        this.x = x; this.y = y; this.dir = dir;
    }

    front(n) {
        switch (this.dir) {
            case RIGHT:
                return [this.x + n, this.y];
            case DOWN:
                return [this.x, this.y + n];
            case LEFT:
                return [this.x - n, this.y];
            case UP:
                return [this.x, this.y - n];
            default:
                console.log("Error occurs"); break;
        }
    }

    right(n) {
        switch (this.dir) {
            case RIGHT:
                return [this.x, this.y + n];
            case DOWN:
                return [this.x - n, this.y];
            case LEFT:
                return [this.x, this.y - n];
            case UP:
                return [this.x + n, this.y];
            default:
                console.log("Error occurs"); break;
        }
    }

    diagonal(n) {
        switch (this.dir) {
            case RIGHT:
                return [this.x - n, this.y + n];
            case DOWN:
                return [this.x - n, this.y - n];
            case LEFT:
                return [this.x + n, this.y - n];
            case UP:
                return [this.x + n, this.y + n];
            default:
                console.log("Error occurs"); break;
        }
    }

    rotate() {
        if (this.dir == 3) this.dir = 0;
        else this.dir++;
    }

    moveAlongVector(matrix) {
        matrix[this.y][this.x] = 1;
        switch (this.dir) {
            case RIGHT:
                this.x++; break;
            case DOWN:
                this.y++; break;
            case LEFT:
                this.x--; break;
            case UP:
                this.y--; break;
            default:
                console.log("Error occurs"); break;
        }
    }
}

function spiralize(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(new Array(n).fill(0))
    }
    let vector = new Vector(0, 0, RIGHT);
    while (true) {
        const [frontX, frontY] = vector.front(1);
        const [secondFrontX, secondFrontY] = vector.front(2);
        const [rightX, rightY] = vector.right(2);
        const [diagonalX, diagonalY] = vector.diagonal(1);
        if (matrix[secondFrontY] != undefined &&
            matrix[secondFrontY][secondFrontX] == 1) {
                if (n % 2 == 0 && matrix[diagonalX][diagonalY] == 1) {
                    vector.moveAlongVector(matrix); 
                    break;
                }
                else if (matrix[rightY][rightX] == 1) {
                    vector.moveAlongVector(matrix); 
                    break;
                }
            }
        if (matrix[secondFrontY] != undefined &&
            matrix[secondFrontY][secondFrontX] == 1 ||
            matrix[frontY] == undefined ||
            matrix[frontY][frontX] == undefined) vector.rotate();
        vector.moveAlongVector(matrix);
    }
	return matrix;
}

console.log(spiralize(5));

result.innerHTML = 1;