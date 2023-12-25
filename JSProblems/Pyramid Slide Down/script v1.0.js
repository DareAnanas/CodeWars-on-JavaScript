function longestSlideDown(pyramid) {
    let pyramidSum = [];
    for (let i = 1; i < pyramid.length; i++) {
        pyramidSum.push(new Array(i).fill(0));
    }
    pyramidSum.push(pyramid.at(-1));

    for (let i = pyramid.length-2; i >= 0; i--) {
        pyramidSum[i] = pyramidSum[i].map((_, j) => {
            return pyramid[i][j] + Math.max(pyramidSum[i+1][j], pyramidSum[i+1][j+1]);
        });
    }

    return pyramidSum;
}

console.log(longestSlideDown(
    [[3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]]
    )
);