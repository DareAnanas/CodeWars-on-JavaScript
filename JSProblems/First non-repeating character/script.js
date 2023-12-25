let result = document.querySelector('#result');

let str = '';

function firstNonRepeatingLetter(str) {
    for (const i of str) {
        if (str.match(new RegExp(i, 'gi')).length == 1) {
            return i;
        }
    }
    return '';
}
console.log(firstNonRepeatingLetter(str));
result.innerHTML = firstNonRepeatingLetter(str);