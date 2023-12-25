function round(n) {
    return parseFloat(n.toFixed(2));
}

function centroid(c) {
    let result = [];
    for (let i = 0; i < 3; i++) {
        n = round((c[0][i] + c[1][i] + c[2][i]) / 3);
        result.push(n);
    }
    return result;
}

console.log(centroid([[1,0,5], [0,1,5], [2,2,5]]));
console.log(centroid([[7,0,5], [3,1,5], [2,1,5]]));