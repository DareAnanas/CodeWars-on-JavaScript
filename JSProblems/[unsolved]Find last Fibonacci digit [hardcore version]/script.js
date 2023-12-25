
function lastFibDigit(n){
    let fibonacci = memoizedFibonacci();
    return fibonacci(n);
}

console.log(lastFibDigit(1));
console.log(lastFibDigit(21));
console.log(lastFibDigit(302));
console.log(lastFibDigit(4003));