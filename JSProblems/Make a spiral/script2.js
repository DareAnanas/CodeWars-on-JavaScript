let result = document.querySelector('#result');

const n = 5;
let matrix = new Array(n).fill(new Array(n).fill(0));

console.log(matrix);
result.innerHTML = matrix;
matrix[0][0] = 1;
console.log(matrix);

matrix = [];
for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0))
}

console.log(matrix);
matrix[0][0] = 1;
console.log(matrix);