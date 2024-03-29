function generateTopHalf(n) {
    const diamondWidth = 2*n-1;
    let diamond = '';
    for (let i = 1; i <= diamondWidth; i+=2) {
        const spaceWidth = (diamondWidth - i) / 2;
        let layer = ' '.repeat(spaceWidth) +
                    '*'.repeat(i);
        diamond += layer + '\n';
    }
    return diamond;
}

function generateBottomHalf(n) {
    const diamondWidth = 2*n-1;
    let diamond = '';
    for (let i = diamondWidth - 2; i >= 1; i-=2) {
        const spaceWidth = (diamondWidth - i) / 2;
        let layer = ' '.repeat(spaceWidth) +
                    '*'.repeat(i);
        diamond += layer + '\n';
    }
    return diamond;
}

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
    let reachedMaximum = false;
    let numberOfAsterisks = 1;
    for (let i = 0; i < n; i++) {
        // used numberOfAsterisks
        console.log(numberOfAsterisks);
        if (!reachedMaximum && numberOfAsterisks == n) {
            reachedMaximum = true;
        }
        if (!reachedMaximum)
            numberOfAsterisks += 2;
        else
            numberOfAsterisks -= 2;
    }
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