let result = document.querySelector('#result');

function fillMultiples(arr, a, n) {
    let i = 1;
    while (true) {
        let b = a * i;
        if (b >= n) break;
        arr.push(b);
        i++;
    }
}

function solution(n){
    let threes = [];
    let fives = [];
    
    fillMultiples(threes, 3, n);
    fillMultiples(fives, 5, n);

    for (let i = 0; i < fives.length; i++) {
        if (threes.indexOf(fives[i]) != -1) {
            fives[i] = 0;
        }
    }

    let sum = threes.reduce((sum, val) => sum + val, 0);
    sum += fives.reduce((sum, val) => sum + val, 0);
    return sum;
}

console.log(solution(55629));

result.innerHTML = 1;