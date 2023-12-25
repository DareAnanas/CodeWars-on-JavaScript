let result = document.querySelector('#result');

function fib(n) {
    let isNegative = false;
    if (n < 0) {
        n = Math.abs(n);
        isNegative = true;
    }
    result = [0, 1];

    for (let i = 0; i <= n; i++) {
        const e1 = result[i];
        const e2 = result[i+1];
        result.push(e1 + e2);
    }

    return isNegative ? BigInt(-result[n]) : BigInt(result[n]);
}

console.log(fib(-6));

result.innerHTML = 1;