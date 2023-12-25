console.log(listPosition('BAAA')); //4
console.log(listPosition('ABAB')); //2
console.log(listPosition('ABCD')); //1
console.log(listPosition('BCDA')); //10
console.log(listPosition('BDAC')); //11
console.log(listPosition('BDCA')); //12
console.log(listPosition('QUESTION')); //24572
console.log(listPosition('BOOKKEEPER')); //10743

function listPosition(word) {
    let alphaOrder = word.split('').sort();
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
        const alphaIndex = alphaOrder.indexOf(word[i]);
        const duplicatesFactorial = countDuplicatesFactorial(alphaOrder);
        sum += alphaIndex * factorial(alphaOrder.length - 1) / duplicatesFactorial;
        alphaOrder.splice(alphaIndex, 1);
    }
    return sum + 1;
}

function countDuplicatesFactorial(alphaOrder) {
    let counter = {};
    for (let e of alphaOrder) {
        if (counter[e] == undefined) {counter[e] = 1; continue;}
        counter[e]++;
    }
    let sum = 1;
    for (e of Object.values(counter)) {
        if (e > 1) sum *= factorial(e);
    }
    return sum;
}

function factorial(n) {
    if (n <= 2) return n;
    return n * factorial(n - 1);
}
