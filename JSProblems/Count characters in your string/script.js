let result = document.querySelector('#result');

let str = "aba";

function count1(str) {
    let obj = {};
    for (const i of str) {
        if (i in obj) obj[i] += 1;
        else obj[i] = 1;
    }
    return obj;
}

function count2(str) {  
    var count = {};
    str.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}

let result1 = count1(str);
let result2 = count2(str);
console.log(result1, result2);
