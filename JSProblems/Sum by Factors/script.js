console.log(sumOfDivided([12, 15]));
console.log(sumOfDivided([ 15, 21, 24, 30, -45 ]));

function sumOfDivided(nums) {
    let primesCount = {};
    for (n of nums) {
        let primes = primeFactorization(n);
        for (p of primes) {
            if (primesCount[p] == undefined) {
                primesCount[p] = n;
                continue;
            }
            primesCount[p] += n;
        }
    }
    let result = [];
    for (const p in primesCount) {
        result.push([parseInt(p), primesCount[p]]);
    }
    return result;
}

function primeFactorization(n) {
    let factors = [];
    let divisor = 2;
    while (Math.abs(n) >= 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
            continue;
        }
        divisor++;
    }
    return Array.from(new Set(factors));
}