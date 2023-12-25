let result = document.querySelector('#result');

function isIsogram(str){
    let array = [];
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        const e = str[i];
        if (array.indexOf(e) == -1) array.push(e);
        else return false
    }
    return true;
}

let str = 'Dermatoglyphics';

result.innerHTML = isIsogram(str);