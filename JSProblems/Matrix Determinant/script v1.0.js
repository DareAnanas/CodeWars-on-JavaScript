let matrix = [
    [7, -3, 5],
    [1, 4, -1],
    [3, -4, -2]
];

console.log(det(matrix));

function det(matrix) {
    if (matrix.length == 1) return matrix[0][0];
    if (matrix.length == 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        const e = matrix[0][i];
        let minor = cut(matrix, i);
        let interdet = det(minor);
        result.push(e * interdet);
    }
    let even_sum = 0;
    let odd_sum = 0;
    for (let i = 0; i < result.length; i++) {
        const e = result[i];
        if (i % 2 == 0) even_sum += e;
        else odd_sum += e;
    }
    return even_sum - odd_sum;
}

function cut(matrix, j) {
    let result = [];
    for (e of matrix) {
        result.push([...e]);
    }
    result.shift();
    for (let i = 0; i < result.length; i++) {
        result[i].splice(j, 1);
    }
    return result;
}