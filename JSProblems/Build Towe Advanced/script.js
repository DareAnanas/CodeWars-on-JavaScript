function towerBuilder(n, blockSize) {
    const towerWidth = 2*n-1;
    const blockWidth = blockSize[0];
    const blockHeight = blockSize[1];
    let tower = [];
    for (let i = 1; i <= towerWidth; i+=2) {
        const spaceWidth = (towerWidth - i) / 2;
        let layer = ' '.repeat(blockWidth).repeat(spaceWidth) +
                    '*'.repeat(blockWidth).repeat(i) +
                    ' '.repeat(blockWidth).repeat(spaceWidth);
        for (let i = 0; i < blockHeight; i++) {
            tower.push(layer);
        }
    }
    return tower;
}

function chaiTest() {
    let assert = chai.assert;

    assert.deepEqual(towerBuilder(1, [1, 1]), ['*']);
    assert.deepEqual(towerBuilder(3, [4, 2]), [
        '        ****        ', 
        '        ****        ', 
        '    ************    ', 
        '    ************    ', 
        '********************', 
        '********************'
    ]);
}

function main() {
    chaiTest();
    console.log(towerBuilder(1, [1, 1]));
}

main();