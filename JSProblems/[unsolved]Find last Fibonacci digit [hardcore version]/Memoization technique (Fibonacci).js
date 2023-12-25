function memoizedFibonacci(params) {
    let cache = {};

    function fibonacci(n) {
        if (n == 0 || n == 1) {
            return n;
        }
        if (n in cache) {
            return cache[n];
        }
        cache[n] = fibonacci(n-1) + fibonacci(n-2);
        return cache[n];
    }

    return fibonacci;
}

let fibonacci = memoizedFibonacci();