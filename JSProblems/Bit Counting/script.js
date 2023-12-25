let result = document.querySelector('#result');

function countBits(n) {
    return n.toString(2).split('').reduce((acc, val) => acc + parseInt(val), 0);
}

console.log(countBits(1234));

result.innerHTML = 1;