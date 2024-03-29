function generateTopHalf(n) {
    const diamondWidth = 2*n-1;
    let diamond = '';
    for (let i = 1; i <= diamondWidth - 2; i+=2) {
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

function diamond(n) {
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

function chaiTest() {
    let assert = chai.assert;

    assert.equal(generateTopHalf(3), 
`   *
  ***
`);
}

function main() {
    chaiTest();
    console.log(generateTopHalf(3));
}

main();