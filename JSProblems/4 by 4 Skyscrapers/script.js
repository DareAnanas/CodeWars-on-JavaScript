function test() {
    let clues1 = [
        1, 2, 4, 3,
        3, 2, 1, 2,
        2, 1, 2, 2,
        2, 3, 2, 1
    ];

    let cluesManager = new CluesManager(clues1);
    let actual = cluesManager.generateCombinations();
    console.log(actual);

    let expected = {
        cols: [
            [
                [4, 1, 2, 3],
                [4, 2, 1, 3]
            ],
            [
                [1, 4, 2, 3],
                [2, 4, 1, 3],
                [3, 4, 1, 2],
                [3, 2, 4, 1],
                [3, 1, 4, 2],
                [2, 1, 4, 3]
            ],
            [
                [1, 2, 3, 4]
            ],
            [
                [1, 2, 4, 3],
                [1, 3, 4, 2],
                [2, 3, 4, 1]
            ]
        ],
        rows: [
            [
                [4, 2, 3, 1],
                [4, 1, 3, 2],
                [4, 3, 1, 2]
            ],
            [
                [1, 4, 2, 3],
                [2, 4, 1, 3],
                [3, 4, 1, 2],
                [3, 2, 4, 1],
                [3, 1, 4, 2],
                [2, 1, 4, 3]
            ],
            [
                [1, 3, 2, 4],
                [2, 3, 1, 4],
                [2, 1, 3, 4]
            ],
            [
                [1, 4, 2, 3],
                [2, 4, 1, 3],
                [3, 4, 1, 2],
                [3, 2, 4, 1],
                [3, 1, 4, 2],
                [2, 1, 4, 3]
            ]
        ]
    }

    let clues2 = [
        0, 0, 1, 2,
        0, 2, 0, 0,
        0, 3, 0, 0,
        0, 1, 0, 0
    ];

    cluesManager.clues = clues2;
    actual = cluesManager.generateCombinations();
    console.log(actual);

    let clues3 = [
        3, 0, 0, 0,
        0, 0, 3, 0,
        2, 0, 2, 0,
        0, 0, 3, 0
    ];

    cluesManager.clues = clues3;
    actual = cluesManager.generateCombinations();
    console.log(actual);
}

class CluesManager {
    clues;
    combinationsTable;

    constructor(clues) {
        this.clues = clues;
        this.combinationsTable = generateCombinationsTable();
    }

    generateCombinations() {
        let combinations = {
            cols:[], 
            rows:[]
        };

        for (let cluePair of this.iterateColsPairs()) {
            combinations.cols.push(this.getPairCombinations(cluePair))
        }
        for (let cluePair of this.iterateRowsPairs()) {
            combinations.rows.push(this.getPairCombinations(cluePair));
        }

        return combinations;
    }

    *iterateColsPairs() {
        for (let i = 0; i < 4; i++) {
            let leftClue = this.clues[i];
            let rightClue = this.clues[11 - i];
            yield [leftClue, rightClue];
        }
    }

    *iterateRowsPairs() {
        for (let i = 15; i > 11; i--) {
            let leftClue = this.clues[i];
            let rightClue = this.clues[19 - i];
            yield [leftClue, rightClue];
        }
    }

    getPairCombinations(cluePair) {
        let combinations = [];
        let clueComparator = new ClueComparator(cluePair);
        for (let row of this.combinationsTable) {
            row = [...row];
            clueComparator.tableLeftClue = row.shift();
            clueComparator.tableRightClue = row.pop();
            let tableCombination = row;
            if (clueComparator.hasFoundTableCombination()) {
                combinations.push(tableCombination);
            }
        }
        return combinations;
    }
}

class ClueComparator {
    cluePair;
    tableLeftClue;
    tableRightClue;

    constructor(cluePair) {
        this.cluePair = cluePair;
    }

    hasFoundTableCombination() {
        if (this.cluePair[0] == 0 && this.cluePair[1] == 0) {
            return true;
        }
        else if (this.cluePair[0] == 0) {
            return this.tableRightClue == this.cluePair[1];
        }
        else if (this.cluePair[1] == 0) {
            return this.tableLeftClue == this.cluePair[0];
        } else {
            return this.tableLeftClue == this.cluePair[0] && 
            this.tableRightClue == this.cluePair[1];
        }
    }
}

function generateCombinationsTable() {
    let table = [
        [1, 4,1,2,3, 2],
        [1, 4,2,1,3, 2],
        [1, 4,2,3,1, 3],
        [1, 4,1,3,2, 3],
        [1, 4,3,1,2, 3],
        [1, 4,3,2,1, 4],

        [2, 3,2,1,4, 1],
        [2, 3,1,2,4, 1],
        [2, 1,4,2,3, 2],
        [2, 2,4,1,3, 2],
        [2, 3,4,1,2, 2],
        [2, 3,2,4,1, 2],
        [2, 3,1,4,2, 2],
        [2, 2,1,4,3, 2],
        [2, 3,4,2,1, 3],
        [2, 2,4,3,1, 3],
        [2, 1,4,3,2, 3],

        [3, 1,3,2,4, 1],
        [3, 2,3,1,4, 1],
        [3, 2,1,3,4, 1],
        [3, 1,2,4,3, 2],
        [3, 1,3,4,2, 2],
        [3, 2,3,4,1, 2],

        [4, 1,2,3,4, 1]
    ];
    return table;
}






























test();