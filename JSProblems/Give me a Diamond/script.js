function * diamondWidthGenerator(n) {
    let reachedMaximum = false;
    let numberOfAsterisks = 1;
    for (let i = 0; i < n; i++) {
        yield numberOfAsterisks;
        if (!reachedMaximum && numberOfAsterisks == n) {
            reachedMaximum = true;
        }
        if (!reachedMaximum)
            numberOfAsterisks += 2;
        else
            numberOfAsterisks -= 2;
    }
}

function diamond(n) {
    if (n <= 0) return null;
    if (n % 2 == 0) return null;
    let diamond = '';
    for (let diamondWidth of diamondWidthGenerator(n)) {
        let layer = ' '.repeat((n - diamondWidth) / 2) + 
                    '*'.repeat(diamondWidth);
        diamond += layer + '\n';
    }
    return diamond;
}

function chaiTest() {
    let assert = chai.assert;

    assert.equal(generateTopHalf(3), 
`   *
  ***
`);
}

function main() {
    // chaiTest();
    console.log(diamond(5));
}

main();