let result = document.querySelector('#result');

function encode(e) {
    let uppercase = false;
    if (e == e.toUpperCase()) uppercase = true;
    let a = uppercase ? 'A'.charCodeAt() : 'a'.charCodeAt();
    let z = uppercase ? 'Z'.charCodeAt() : 'z'.charCodeAt();
    let code = e.charCodeAt();
    if (code >= a && code <= z) {
        code += 13;
        if (code > z) {
            code -= z;
            code += a;
        }
        return String.fromCharCode(code);
    }
    return e;
}

function rot13(message){
    return message.split('').map(encode).join('');
}

console.log(rot13('ZAza'));

result.innerHTML = 1;