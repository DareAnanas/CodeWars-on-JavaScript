let result = document.querySelector('#result');

function memoizedFibonacci() {
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


console.log(fibonacci(2000));


result.innerHTML = 1;