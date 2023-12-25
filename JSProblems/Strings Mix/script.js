let result = document.querySelector('#result');

function countLetters(str, result, lever) {
    for (const e of str.match(/[a-z]/g)) {
        if (result[e] == undefined) {
            result[e] = lever ? [0, 1]:[1, 0]; continue;
        }
        result[e][lever ? 1:0]++;
    }
}

function findMaximumLetters(letters) {
    for (const key in letters) {
        const e = letters[key];
        if (e[0] == e[1]) {
            letters[key][0] = '='; continue;
        }
        if (e[0] < e[1]) {
            letters[key][0] = '2'; continue;
        }
        if (e[0] > e[1]) {
            letters[key][1] = e[0];
            letters[key][0] = '1'; continue;
        }
    }
}

function sortLettersAlphanumeric(letters) {
    return Object.entries(letters).sort((a, b) => {
        let n = b[1][1] - a[1][1];
        if (n == 0) return a[0] > b[0] ? 1 : -1;
        return n;
    });
}

function mix(s1, s2) {
    let letters = {};
    countLetters(s1, letters, false);
    countLetters(s2, letters, true);
    findMaximumLetters(letters);
    lettersEntries = sortLettersAlphanumeric(letters);
    console.log(lettersEntries);
    let result = [];
    for (const e of lettersEntries) {
        if (e[1][1] == 1) continue;
        result.push(`${e[1][0]}:${e[0].repeat(e[1][1])}`);
    }
    // for (const key in letters) {
    //     const e = letters[key];
    //     if (e[1] == 1) continue;
    //     result.push(`${e[0]}:${key.repeat(e[1])}`)
    // }
    console.log(result);
}

let s1 = "my&friend&Paul has heavy hats! &";
let s2 = "my friend John has many many friends &";

console.log(mix(s1, s2));

result.innerHTML = 1;