function longestSlideDown(pyramid) {
    let pyramidSum = [];
    for (let i = 1; i < pyramid.length; i++) {
        pyramidSum.push(new Array(i).fill(0));
    }
    pyramidSum.push(pyramid.at(-1));
    for (let i = pyramid.length-2; i >= 0; i--) {
        for (let j = 0; j < pyramidSum[i].length; j++) {
            pyramidSum[i][j] = pyramid[i][j] + Math.max(pyramidSum[i+1][j], pyramidSum[i+1][j+1]);
        }
    }
    return pyramidSum[0][0];
}

console.log(longestSlideDown(
    [[3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]]
    )
);