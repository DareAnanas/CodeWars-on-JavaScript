function x(n) {
    let xShape = '';
    let mainDiagonalIndex = 0;
    let addDiagonalIndex = n - 1;
    for (let i = 0; i < n; i++) {
        let layer = '□'.repeat(n);
        layer[mainDiagonalIndex] = '■';
        layer[addDiagonalIndex] = '■';
        xShape += layer + '\n';
        mainDiagonalIndex++;
        addDiagonalIndex--;
    }
    return xShape;
}

function chaiTest() {
    let assert = chai.assert;
}

function main() {
    chaiTest();
    console.log(x(3));
}

main();