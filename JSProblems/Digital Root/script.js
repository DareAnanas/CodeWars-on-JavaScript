let result = document.querySelector('#result');

function reduce(n) {
    return n.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
}

function digitalRoot(n) {
    while (true) {
        if (n.toString().length == 1) return n;
        n = reduce(n);
    }
}

console.log(digitalRoot(942));

result.innerHTML = 1;