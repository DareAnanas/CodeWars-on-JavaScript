function multiplyRow(row, n) {
    return row.map(e => e * n);
}

Array.prototype.add = function(row) {
    for (let i = 0; i < this.length; i++) {
        const e = this[i];
        this[i] = e + row[i];
    }
}

function calculateDeterminant(matrix) 
{
    let history = [];

    for (let i = 0; i < matrix.length - 1; i++) 
    {
        history.push(matrix[i][i]);
    
        matrix[i] = multiplyRow(matrix[i], 1/matrix[i][i]);
    
        for (let j = i + 1; j < matrix.length; j++) {
            let row = multiplyRow(matrix[i], -matrix[j][i]);
            matrix[j].add(row);
        }
    }
    
    console.log(matrix);
    
    let determinant = 1;
    
    for (let i = 0, j = 0; i < matrix.length; i++, j++) {
        determinant *= matrix[i][j];
    }
    
    for (e of history) {
        determinant *= e;
    }

    return determinant;
}

let matrix = [
    [ 1, -1, -2, -1, 2],
    [ 3, -1,  2,  5, 2],
    [-2, -1, -1, -3, 4],
    [-3,  0, -5, -1, 2],
    [ 4, -2,  3,  2, 1]
];

// let matrix = [
//     [2, 4, 3, 1],
//     [-4, -3, -2, -1],
//     [5, 2, -1, -2],
//     [4, 2, 1, -5]
// ]

// let matrix = [
//     [3, 1, 6],
//     [2, -6, -1],
//     [-22, -4, 5]
// ]

// let matrix = [
//     [5, -2],
//     [3, 1]
// ]

console.log(calculateDeterminant(matrix));