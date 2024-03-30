function countToOneBillion() {
    let n = 0;
    while (n < 1_000_000_000) {
        n++;
    }
}

console.time('Count to one billion');
countToOneBillion();
console.timeEnd('Count to one billion');
