// factorial
const fact = n => (n < 2) ? 1 : fact(n - 1) * n;

// permutations with repetition
const countCombinations = (seq) => {
    const duplications = Object.values(
        seq.reduce((acc, e) => ({...acc, [e]: (acc[e] || 0) + 1}), {})
    ).reduce((acc, el) => acc * fact(el), 1);

    return fact(seq.length) / duplications;
};

// solution
function listPosition(s) {
    const arr = s.split('');
    let order = 1;

    for (let i = 0; i < arr.length; i++) {
        const set = new Set();
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i] && !set.has(arr[j])) {
                set.add(arr[j]);
                order += countCombinations([...arr.slice(i, j), ...arr.slice(j + 1)]);
            }
        }
    }

    return order
}


console.time('a');
console.log(listPosition('BAAA')); //4
console.log(listPosition('ABAB')); //2
console.log(listPosition('ABCD')); //1
console.log(listPosition('BCDA')); //10
console.log(listPosition('BDAC')); //11
console.log(listPosition('BDCA')); //12
console.log(listPosition('QUESTION')); //24572
console.log(listPosition('BOOKKEEPER')); //10743
console.timeEnd('a');
