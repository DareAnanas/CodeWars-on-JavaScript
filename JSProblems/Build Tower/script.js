function buildTower(n) {
    const towerWidth = 2*n-1;
    let tower = [];
    for (let i = 1; i <= towerWidth; i+=2) {
        const spaceWidth = (towerWidth - i) / 2;
        let layer = ' '.repeat(spaceWidth) +
                    '*'.repeat(i) +
                    ' '.repeat(spaceWidth);
        tower.push(layer);
    }
    return tower;
}

function chaiTest() {
    let assert = chai.assert;

    assert.deepEqual(buildTower(1), ['*']);
    assert.deepEqual(buildTower(2), [' * ', '***']);
    assert.deepEqual(buildTower(3), ['  *  ', ' *** ', '*****']);
}

function main() {
    chaiTest();
    console.log(buildTower(1));
}

main();