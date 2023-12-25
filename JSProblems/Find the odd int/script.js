let result = document.querySelector('#result');

let array = [1,2,2,3,3,3,4,3,3,3,2,2,1];

function findOdd(array) {
    let count = {};
    for (const i of array) {
        if (i in count) count[i] += 1;
        else count[i] = 1;
    }
    for (const i in count) {
        const e = count[i];
        if (e % 2 == 1) return parseInt(i);
    }
}

result.innerHTML = findOdd(array);