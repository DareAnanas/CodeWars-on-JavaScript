let result = document.querySelector('#result');

function largestPower(n){
    if (n == 1) return [0, -1];
    if (n <= 4) return [1, -1];
    let powers = [];
    let m = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= m; i++) {
        let a = i;
        do {
            a = a * i;
        } while (a < n);
        powers.push(a / i);
    }
    let x = Math.max(...powers);
    let y = powers.reduce((acc, val) => {
        if (val == x) return acc + 1;
        return acc;
    }, 0);
    return [x, y];
}

console.log(largestPower(65));

result.innerHTML = 1;