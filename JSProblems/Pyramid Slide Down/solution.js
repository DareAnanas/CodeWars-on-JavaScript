function longestSlideDown(pyramid) {
    let pyramidSum = [];
    pyramid.forEach((r, i) => {
      pyramidSum.push(r.map((e) => {
        return (i === pyramid.length - 1) ? e : 0;
      }));
    });
  
    for (let i = pyramidSum.length - 2; i >= 0; i--) {
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