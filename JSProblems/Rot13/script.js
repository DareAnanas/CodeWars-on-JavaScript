let result = document.querySelector('#result');

function rot13(message){
    let k = 13;
    let arr = [];
    for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
        arr.push(String.fromCharCode(i));
    }
    k = k % arr.length;
    arr = arr.splice(arr.length - k, k).concat(arr);
    let result = [];
    for (let e of message) {
        if (!/[a-z]/i.test(e)) {result.push(e); continue;}
        if (e == e.toUpperCase()) {
            result.push(arr[e.charCodeAt() - 'A'.charCodeAt()].toUpperCase());
        } else {
            result.push(arr[e.charCodeAt() - 'a'.charCodeAt()]);
        }
    }
    return result.join('');
}

console.log(rot13('ABcde'));

result.innerHTML = 1;