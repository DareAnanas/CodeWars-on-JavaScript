let result = document.querySelector('#result');

function isTwoDigit(n) {
    if (n.toString().length == 2) return true;
    return false;
}

function firstDigit(n) {
    return parseInt(n.toString()[1]);
}

function add(a, b) {
    let n1 = a.split('');
    let n2 = b.split('');
    if (n1.length > n2.length) n2 = Array(n1.length - n2.length).fill(0).concat(n2);
    if (n1.length < n2.length) n1 = Array(n2.length - n1.length).fill(0).concat(n1);
    let leading_idx = null;
    for (let i = Math.max(n1.length, n2.length) - 1; i >= 0; i--) {
        n1[i] = parseInt(n1[i]) + parseInt(n2[i]) + ((i == leading_idx) ? 1 : 0);
        if (isTwoDigit(n1[i])) {n1[i] = firstDigit(n1[i]); leading_idx = i - 1;}
        else leading_idx = null;
    }
    if (leading_idx == -1) n1.unshift(1);
    return n1.join('');
}

console.log(add('20', '920'));

result.innerHTML = 1;