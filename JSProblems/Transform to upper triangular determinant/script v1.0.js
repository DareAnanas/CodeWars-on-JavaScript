const matrix = [
    [ 1, -1, -2, -1, 2],
    [ 3, -1,  2,  5, 2],
    [-2, -1, -1, -3, 4],
    [-3,  0, -5, -1, 2],
    [ 4, -2,  3,  2, 1]
];

function multiplyRow(row, n) {
    return row.map(e => e * n);
}

Array.prototype.add = function(row) {
    for (let i = 0; i < this.length; i++) {
        const e = this[i];
        this[i] = e + row[i];
    }
}

let history = [];

history.push(matrix[0][0]);

matrix[0] = multiplyRow(matrix[0], 1/matrix[0][0]);

for (let i = 1; i < matrix.length; i++) {
    let row = multiplyRow(matrix[0], -matrix[i][0]);
    matrix[i].add(row);
}

history.push(matrix[1][1]);

matrix[1] = multiplyRow(matrix[1], 1/matrix[1][1]);

for (let i = 2; i < matrix.length; i++) {
    let row = multiplyRow(matrix[1], -matrix[i][1]);
    matrix[i].add(row);
}

history.push(matrix[2][2]);

matrix[2] = multiplyRow(matrix[2], 1/matrix[2][2]);

for (let i = 3; i < matrix.length; i++) {
    let row = multiplyRow(matrix[2], -matrix[i][2]);
    matrix[i].add(row);
}

history.push(matrix[3][3]);

matrix[3] = multiplyRow(matrix[3], 1/matrix[3][3]);

for (let i = 4; i < matrix.length; i++) {
    let row = multiplyRow(matrix[3], -matrix[i][3]);
    matrix[i].add(row);
}

console.log(matrix);

let determinant = 1;

for (let i = 0, j = 0; i < matrix.length; i++, j++) {
    determinant *= matrix[i][j];
}

for (e of history) {
    determinant *= e;
}

console.log(determinant);