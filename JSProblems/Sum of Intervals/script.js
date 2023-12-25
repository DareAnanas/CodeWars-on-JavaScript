let result = document.querySelector('#result');

function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let stack = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let a = stack.at(-1);
        let b = intervals[i];
        if (a[1] <= b[0]) stack.push(b);
        else stack[stack.length-1] = [a[0], Math.max(a[1], b[1])];
    }
    console.log(stack.reduce((acc, val) => acc += val[1] - val[0], 0));
}
sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
]);
result.innerHTML = 1;