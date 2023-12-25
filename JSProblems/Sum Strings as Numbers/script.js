let result = document.querySelector('#result');

let a = '';
let b = '';
let c = 19401841n;

function sumStrings(a,b) {
    return (BigInt(a) + BigInt(b)).toString();
}
console.log(sumStrings(a, b));
result.innerHTML = 1;