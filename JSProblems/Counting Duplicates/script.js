let result = document.querySelector('#result');

function duplicateCount(str){
    str = str.toLowerCase();
    let duplicates = {};
    for (e of str) {
        if (Object.keys(duplicates).includes(e)) {
            duplicates[e] = true;
        } else {
            duplicates[e] = false;
        }
    }
    return Object.values(duplicates).reduce((acc, val) => val ? acc + 1 : acc, 0);
}

console.log(duplicateCount("aabBcde"));

result.innerHTML = 1;