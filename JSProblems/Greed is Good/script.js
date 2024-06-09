const ones = {
    1: 100,
    5: 50
}

const threes = {
    1: 1000,
    6: 600,
    5: 500,
    4: 400,
    3: 300,
    2: 200
}

function scoreThrow(digits) {
    let sortedDigits = digits.toSorted();
    let currentDigitCount = [sortedDigits[0], 1];
    let score = 0;
    for (let i = 1; i < sortedDigits.length; i++) {
        let previousDigit = sortedDigits[i-1];
        let currentDigit = sortedDigits[i];
        if (currentDigitCount[1] == 3) {
            score += threes[currentDigitCount[0]];
            currentDigitCount = [currentDigit, 1];
            continue;
        }
        if (currentDigit != previousDigit) {
            if (currentDigitCount[1] == 2) {
                score += 2*(ones[previousDigit] ?? 0);
            } else {
                score += ones[previousDigit] ?? 0;
            }
            currentDigitCount = [currentDigit, 1];
        }
        if (currentDigit == previousDigit) {
            currentDigitCount[1]++;
        }
    }
    if (currentDigitCount[1] == 3) {
        score += threes[currentDigitCount[0]];
    } else if (currentDigitCount[1] == 2) {
        score += 2*(ones[currentDigitCount[0]] ?? 0);
    } else {
        score += ones[sortedDigits.at(-1)] ?? 0;
    }
    return score;
}

function chaiTest() {
    let assert = chai.assert;
    assert.deepEqual(scoreThrow([2, 3, 4, 6, 2]), 0, 'Incorrect answer for dice = [2, 3, 4, 6, 2]');
    assert.deepEqual(scoreThrow([4, 4, 4, 3, 3]), 400, 'Incorrect answer for dice = [4, 4, 4, 3, 3]');
    assert.deepEqual(scoreThrow([2, 4, 4, 5, 4]), 450, 'Incorrect answer for dice = [2, 4, 4, 5, 4]');
    assert.deepEqual(scoreThrow([1, 1, 2, 3, 6]), 200, 'Incorrect answer for dice = [1, 1, 2, 3, 6]');
    assert.deepEqual(scoreThrow([1, 1, 1, 1, 1]), 1200, 'Incorrect answer for dice = [1, 1, 1, 1, 1]');
    assert.deepEqual(scoreThrow([1, 1, 1, 5, 5]), 1100, 'Incorrect answer for dice = [1, 1, 1, 5, 5]');

}

function main() {
    chaiTest();
    console.log(scoreThrow([1, 1, 2, 3, 6]));
}

main();