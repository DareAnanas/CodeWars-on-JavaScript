let result = document.querySelector('#result');

let str = "The 10 quick, brown foxes jumps over 10 lazy dogs";

function isPangram(str){
    let str_set = new Set();
    for (let i = 0; i < str.length; i++) {
        const e = str[i];
        if (e.match(/[a-z]/i)) {
            str_set.add(e);
        }
    }
    if (str_set.size == 26) return true;
    return false;
}

result.innerHTML = isPangram(str);