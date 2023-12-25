let result = document.querySelector('#result');

let examplestr1 = '';
let examplestr2 = 'abcdef';

function splitString(str){
    function isOdd(n) {
        if (n % 2 == 1) return true;
        return false;
    }
    let array = str.match(/(..)/g) ?? [];
    if (isOdd(str.length)) {
        array.push(str.slice(-1) + '_');
    }
    console.log('array', array)
    return array;
    
}

result.innerHTML = splitString(examplestr1);