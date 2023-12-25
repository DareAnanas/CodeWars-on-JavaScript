console.log(fib(1000000));

function fib(n) {
    let isNegativeResult = false;
    if (n < 0 && n % 2 == 0) {
        isNegativeResult = true;
    }
    n = Math.abs(n);
    return isNegativeResult ? -fib_p(n) : fib_p(n);
} 

function fib_p(n) {
    if (n == 0) return BigInt(0);
    if (n == 1 || n == 2) return BigInt(1);
    if (n % 2 == 0) {
        let k = n / 2;
        let fk = fib_p(k);
        return (2n*fib_p(k-1) + fk) * fk;
    } else {
        let k = (n + 1) / 2;
        return fib_p(k)**2n + fib_p(k-1)**2n;
    }
}