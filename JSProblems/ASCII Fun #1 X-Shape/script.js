function x(n) {
    let xShape = '';
    let mainDiagonalIndex = 0;
    let addDiagonalIndex = n - 1;
    for (let i = 0; i < n; i++) {
        let layer = new Array(n);
        for (let j = 0; j < n; j++) {
            layer[j] = '□';
        }
        layer[mainDiagonalIndex] = '■';
        layer[addDiagonalIndex] = '■';
        xShape += layer.join('') + '\n';
        mainDiagonalIndex++;
        addDiagonalIndex--;
    }
    xShape = xShape.slice(0, -1);
    return xShape;
}

function chaiTest() {
    let assert = chai.assert;
}

function main() {
    chaiTest();
    console.log(x(5));
}

main();